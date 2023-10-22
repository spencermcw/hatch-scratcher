import { DropShadowFilter, GlowFilter } from "pixi-filters";
import { filters, Text, Container, Sprite, Graphics, NineSlicePlane } from "pixi.js";
import { buildButton } from "../lib/factories";
import Scene from "./baseScene";
import { defaultTextStyle } from "../constants";
import * as audio from '../lib/audio'

import * as WAGER from "../store/wager";
import { ACTIONS, MUTATIONS } from "../store/store";

const dropShadow = new DropShadowFilter()

const glow = new GlowFilter({
    distance: 25,
    color: 0xFFEA00,
    innerStrength: 4,
    outerStrength: 0,
})

const matrixFilter = new filters.ColorMatrixFilter()
matrixFilter.brightness(0.3)
matrixFilter.blackAndWhite(true)


export default class WagerScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.setupStore()
        // Display Objects
        this.displayObjects = {
            rentalText: {},
            guessBoardTiles: [],
            selectedGuessKeyButton: null,
            selectedIncrementorButton: null,
            totalValueText: null,
        }
        // Container
        this.container = new Container()
        // Background
        const background = new Sprite(this.resources['assets/images/background.png'].texture)
        this.container.addChild(background)
        // Title
        const title = new Sprite(this.titles['title.png'])
        this.container.addChild(title)
        title.position.set(20, 0)
        // Guesses
        const guessesContainer = this.buildGuessButtons()
        this.container.addChild(guessesContainer)
        guessesContainer.position.set(
            background.width / 2 - guessesContainer.width / 2,
            155
        )
        // Guess Board
        const guessBoardContainer = this.buildGuessBoard()
        this.container.addChild(guessBoardContainer)
        guessBoardContainer.position.set(
            background.width / 2 - guessBoardContainer.width / 2,
            385
        )
        // Wager Controls
        const wagerContainer = this.buildWagerContainer()
        this.container.addChild(wagerContainer)
        wagerContainer.position.set(
            // 30, 770
            background.width / 2 - guessBoardContainer.width / 2,
            770
        )
        // Withdraw Balance Wallet
        const walletContainer = this.buildWalletContainer()
        this.container.addChild(walletContainer)
        walletContainer.scale.set(0.7)
        walletContainer.position.set(30, background.height - walletContainer.height)
    }

    setupStore() {
        this.store.commit(
            [WAGER.NAMESPACE, WAGER.MUTATIONS.SET_SELECTED_GUESS_KEY].join('/'),
            null
        )
    }

    buildGuessButtons() {
        // Guesses
        const container = new Container()
        container.filters = [dropShadow]
        const GUESS_PADDING = 5
        const COLS = 8
        const guessTiles = this.store.getters[[WAGER.NAMESPACE, WAGER.GETTERS.GUESS_TILES].join('/')]
        // const isAnimal = (i) => (i < 16) // Convenience - index is animal?
        for (let index = 0; index < guessTiles.length; index++) {
            const curTile = guessTiles[index]
            const guessButton = new Sprite(this.tiles[curTile.textureKey])
            guessButton.interactive = true
            guessButton.buttonMode = true
            guessButton.filters = []
            container.addChild(guessButton)
            guessButton.position.set(
                (index % COLS * guessButton.width) + (index % COLS * GUESS_PADDING),
                Math.floor(index / COLS) * guessButton.height + Math.floor(index / COLS) * GUESS_PADDING
            )
            const guessButtonDown = () => {
                // Disable Selected Guess
                if (curTile.key === this.store.state.wager.selectedGuessKey) {
                    guessButton.filters = []
                    this.store.commit(
                        [WAGER.NAMESPACE, WAGER.MUTATIONS.SET_SELECTED_GUESS_KEY].join('/'),
                        null
                    )
                    this.displayObjects.selectedGuessKeyButton = null
                    audio.playAudio(audio.audioFiles.remove)
                }
                // Change Selected Guess
                else {
                    if (this.displayObjects.selectedGuessKeyButton !== null) {
                        this.displayObjects.selectedGuessKeyButton.filters = []
                    }
                    guessButton.filters = [glow]
                    this.store.commit(
                        [WAGER.NAMESPACE, WAGER.MUTATIONS.SET_SELECTED_GUESS_KEY].join('/'),
                        curTile.key
                    )
                    this.displayObjects.selectedGuessKeyButton = guessButton
                    audio.playAudio(audio.audioFiles.choice)
                }
            }
            guessButton.on('pointerdown', guessButtonDown)
        }
        // Clear Button
        const clearBoardButton = buildButton(this.tiles['button9s.png'], {
            labelText: 'Clear Board',
            width: this.tiles['animal.png'].width * 3 + GUESS_PADDING * 2
        })
        container.addChild(clearBoardButton)
        clearBoardButton.position.set(
            container.width - clearBoardButton.width,
            container.height - clearBoardButton.height
        )
        clearBoardButton.on('pointerup', () => {
            audio.playAudio(audio.audioFiles.remove)
            this.store.commit([WAGER.NAMESPACE, WAGER.MUTATIONS.CLEAR_GUESS_BOARD].join('/'))
            this.sceneManager.redraw()
        })
        return container
    }

    buildGuessBoard() {
        const container = new Container()
        let dragging = false
        // Visual Board Container
        const baordBackground = new Graphics()
        baordBackground.lineStyle(3, 0x000000, 0.7)
        baordBackground.beginFill(0x000000, 0.25)
        baordBackground.drawRoundedRect(0, 0, 715, 365, 8)
        baordBackground.endFill()
        container.addChild(baordBackground)
        // Build Tiles
        const tilesContainer = new Container()
        container.addChild(tilesContainer)
        tilesContainer.position.set(10, 10)
        const GUESS_PADDING = 5
        const COLS = 10
        const guessBoard = this.store.state.wager.guessBoard
        const guessTiles = this.store.state.wager.guessTileTextures
        for (let index = 0; index < guessBoard.length; index++) {
            const tileSprite = guessBoard[index] === null ?
                this.tiles['questionTile.png'] :
                this.tiles[guessTiles[guessBoard[index]]]
            const tile = new Sprite(tileSprite)
            tile.interactive = true
            tile.buttonMode = true
            // tile.down = false
            // tile.index = i
            tilesContainer.addChild(tile)
            tile.position.set(
                (index % COLS * tile.width) + (index % COLS * GUESS_PADDING),
                Math.floor(index / COLS) * tile.height + Math.floor(index / COLS) * GUESS_PADDING
            )
            const tileDown = () => {
                dragging = true
                tilePaint()
            }
            const tilePaint = () => {
                if (dragging) {
                    // Update Guess Board
                    const { selectedGuessKey, guessTileTextures } = this.store.state.wager
                    const tile = this.displayObjects.guessBoardTiles[index]
                    const tileGuess = this.store.state.wager.guessBoard[index]
                    if (
                        selectedGuessKey === null ||
                        (tileGuess === selectedGuessKey)
                    ) {
                        this.store.commit(
                            [WAGER.NAMESPACE, WAGER.MUTATIONS.SET_GUESS_AT_INDEX].join('/'),
                            { index, guess: null }
                        )
                        tile.texture = this.tiles['questionTile.png']
                        audio.playAudio(audio.audioFiles.remove)
                    } else {
                        this.store.commit(
                            [WAGER.NAMESPACE, WAGER.MUTATIONS.SET_GUESS_AT_INDEX].join('/'),
                            { index, guess: selectedGuessKey }
                        )
                        tile.texture = this.tiles[guessTileTextures[selectedGuessKey]]
                        audio.playAudio(audio.audioFiles.popclick)
                    }
                    this.refreshTotalText()
                }
            }
            tile.on('pointerdown', tileDown)
            tile.on('pointerup', () => { dragging = false })
            tile.on('pointerover', tilePaint)
            this.displayObjects.guessBoardTiles.push(tile)
        }
        // Bug fix on pointer up
        baordBackground.interactive = true
        baordBackground.on('pointerdown', () => dragging = true)
        baordBackground.on('pointerup', () => dragging = false)
        baordBackground.on('pointerout', (event) => {
            if (!baordBackground.containsPoint(event.data.global)) {
                dragging = false
            }
        })
        return container
    }

    buildWagerContainer() {
        const container = new Container()
        const graphics = new Graphics()
        graphics.lineStyle(3, 0x000000, 0.7)
        graphics.beginFill(0x000000, 0.25)
        graphics.drawRoundedRect(0, 0, 715, 185, 8)
        graphics.endFill()
        container.addChild(graphics)
        // Controls
        const controlsContainer = new Container()
        container.addChild(controlsContainer)
        controlsContainer.position.set(10, 0)
        // Display
        const displayContainer = new Container()
        controlsContainer.addChild(displayContainer)
        // Title
        const title = new Text('Wager:', defaultTextStyle)
        displayContainer.addChild(title)
        // Value
        const wager = new Text('NaN', { ...defaultTextStyle, fill: 0x93D7E8 })
        displayContainer.addChild(wager)
        wager.position.set(title.width + 5, title.y + 2)
        this.displayObjects['wagerText'] = wager
        // Info
        const subtitle = new Text('$ZOO/sq', { ...defaultTextStyle, fontSize: 24 })
        displayContainer.addChild(subtitle)
        subtitle.position.set(wager.x + wager.width + 5, wager.y + wager.height - subtitle.height - 3)
        this.displayObjects['wagerSubtitle'] = subtitle
        // Total
        const totalTitle = new Text('Total:', defaultTextStyle)
        displayContainer.addChild(totalTitle)
        totalTitle.y = title.y + title.height - 5
        const totalValue = new Text('X $ZOO', { ...defaultTextStyle, fontSize: 24 })
        displayContainer.addChild(totalValue)
        totalValue.y = totalTitle.y + totalTitle.height - totalValue.height - 3
        totalValue.x = totalTitle.x + totalTitle.width + 10
        this.displayObjects.totalValueText = totalValue
        // Buttons
        const buttonsContainer = new Container()
        container.addChild(buttonsContainer)
        buttonsContainer.x = 5
        buttonsContainer.y = displayContainer.y + displayContainer.height
        // Sub
        const sub = buildButton(this.tiles['button9s.png'], {
            labelText: '--',
            textStyle: { ...defaultTextStyle, fontSize: 72 },
            width: 155,
            height: 50
        })
        buttonsContainer.addChild(sub)
        sub.on('pointerdown', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.store.commit([WAGER.NAMESPACE, WAGER.MUTATIONS.DECREMENT_WAGER].join('/'))
            this.refreshWagerText()
        })
        // Add
        const add = buildButton(this.tiles['button9s.png'], {
            labelText: '++',
            textStyle: { ...defaultTextStyle, fontSize: 72 },
            width: 155,
            height: 50
        })
        buttonsContainer.addChild(add)
        add.x = sub.width + 5
        add.on('pointerdown', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.store.commit([WAGER.NAMESPACE, WAGER.MUTATIONS.INCREMENT_WAGER].join('/'))
            this.refreshWagerText()
        })
        // Incrementers
        const incrementers = [{
            title: '1',
            value: 1,
        }, {
            title: '100',
            value: 100,
        }, {
            title: '1K',
            value: 1000,
            active: true
        }, {
            title: '10K',
            value: 10000,
        }]
        incrementers.forEach((preset, index) => {
            const presetButton = this.buildWagerButton(preset.value, preset.title, { width: 75, height: 50 })
            buttonsContainer.addChild(presetButton)
            presetButton.position.set(index * 75 + index * 5, sub.y + sub.height + 5)
        })
        // Begin Button
        const beginButton = buildButton(this.tiles['button9s.png'], {
            labelText: 'Begin Round',
            textStyle: { ...defaultTextStyle, fontSize: 64 },
            // height: 165,
            height: container.height - 20,
            width: 370,
        })
        container.addChild(beginButton)
        beginButton.position.set(container.width - beginButton.width - 13, 10)
        beginButton.on('pointerdown', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.store.commit(MUTATIONS.SET_LOADING_TEXT, "We're Getting Ready!")
            this.sceneManager.display('loading')
            this.store.dispatch(ACTIONS.PLAY)
                .then(() => {
                    audio.playAudio(audio.audioFiles.fairy)
                    this.sceneManager.display('scratcher') // Show Scratcher
                })
                .catch(error => {
                    if (error.response)
                        alert(error.response.data)
                    this.sceneManager.display('wager')
                })
        })
        // Update wager before draw
        this.refreshWagerText()
        return container
    }

    buildWalletContainer() {
        const container = new Container()
        // Withdraw
        const withdrawButton = buildButton(this.tiles['button9s.png'], {
            labelText: 'Withdraw',
            // height: 50
        })
        container.addChild(withdrawButton)
        withdrawButton.on('pointerup', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.store.commit(MUTATIONS.SET_LOADING_TEXT, "Processing Withdrawal...")
            this.sceneManager.display('loading')
            this.store.dispatch(ACTIONS.WITHDRAW)
                .catch(error => {
                    if (error.response)
                        alert(error.response.data)
                })
                .finally(() => this.sceneManager.display('wager'))
        })
        // Balance
        const { balance } = this.store.state.session
        const wallet = this.store.state.session._id
        const formattedBalance = Number(balance).toLocaleString('en-US')
        const infoText = new Text(`Balance: ${formattedBalance} $ZOO | Wallet: ${wallet.slice(0, 5)}...${wallet.slice(wallet.length-4)}`, {
            ...defaultTextStyle,
        })
        container.addChild(infoText)
        infoText.position.set(
            withdrawButton.x + withdrawButton.width + 10,
            withdrawButton.y - 5
        )
        // Rollover
        const { rollover } = this.store.state.session
        const formattedRollover = Number(rollover).toLocaleString('en-US')
        const rolloverText = new Text(`Rollover: ${formattedRollover} $ZOO Remaining`, { ...defaultTextStyle })
        container.addChild(rolloverText)
        rolloverText.position.set(
            withdrawButton.x + withdrawButton.width + 10,
            infoText.y + infoText.height
        )
        // Wallet
        return container
    }

    refreshWagerText() {
        const wager = this.displayObjects.wagerText
        const subtitle = this.displayObjects.wagerSubtitle
        const wagerText = Number(this.store.state.wager.wager).toLocaleString('en-US')
        wager.text = wagerText
        subtitle.position.set(wager.x + wager.width + 5, wager.y + wager.height - subtitle.height - 3)
        this.refreshTotalText()
    }

    refreshTotalText() {
        const totalText = this.displayObjects.totalValueText
        const tilesGuessed = this.store.getters[[WAGER.NAMESPACE, WAGER.GETTERS.TOTAL_GUESSES].join('/')]
        totalText.text = (this.store.state.wager.wager * tilesGuessed).toLocaleString('en-US') + ' $ZOO'
    }

    rebuildLastBoard() {
        this.store.state.lastBoard.forEach((tile, index) => {
            this.displayObjects.guessBoardTiles[index].texture =
                tile === null ?
                this.tiles['questionTile.png'] :
                this.tiles[this.guessTextures[tile]]
            this.guessBoard[index] = tile
        })
    }

    buildWagerButton(amount, labelText, options) {
        const button = new NineSlicePlane(this.tiles['button9s.png'], 15, 15, 15, 15);
        button.interactive = true
        button.buttonMode = true
        button.down = false
        // Options
        if (options.width) {
            button.width = options.width
        }
        if (options.height) {
            button.height = options.height
        }
        if (amount === this.store.state.wager.wagerIncrement) {
            button.filters = [glow]
            this.displayObjects.selectedIncrementorButton = button
        }
        // Label
        const label = new Text(labelText, {
            ...defaultTextStyle,
            fontSize: 30
        })
        button.addChild(label)
        label.anchor.set(0.5)
        label.position.set(
            button.width / 2,
            button.height / 2
        )
        // Interaction
        const buttonDown = () => {
            audio.playAudio(audio.audioFiles.choice)
            this.store.commit([WAGER.NAMESPACE, WAGER.MUTATIONS.SET_WAGER_INCREMENT].join('/'), amount)
            this.displayObjects.selectedIncrementorButton.filters = []
            this.displayObjects.selectedIncrementorButton = button
            button.filters = [glow]
        }
        button.on('pointerdown', buttonDown)
        return button
    }
}
