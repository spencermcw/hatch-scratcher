import { Container, Sprite, Graphics, Text, RenderTexture, filters } from "pixi.js"
import { defaultTextStyle, colors } from '../constants'
import Scene from "./baseScene"
import { buildButton } from "../lib/factories"
import { ANIMAL_TEXTURES } from "../store/animals"
import * as audio from "../lib/audio"

const missFilter = new filters.ColorMatrixFilter()
missFilter.brightness(0.5)
missFilter.blackAndWhite(true)

const noise = new filters.NoiseFilter()
noise.noise = 0.1
noise.resolution = 4

const brush = new Graphics()
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 30);
brush.endFill();
brush.cacheAsBitmap = true

export default class ScratcherScene extends Scene {
    winningBoard

    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        const scene = this.buildScene()
        this.container.addChild(scene)
    }

    buildScene() {
        const container = new Container()
        // Background
        const background = new Sprite(this.resources['assets/images/background.png'].texture)
        container.addChild(background)
        // Banner
        const banner = new Sprite(this.titles['title.png'])
        container.addChild(banner)
        banner.position.set(20, 0)
        // Title
        const title = new Text('Start Scratching!', {
            ...defaultTextStyle,
            fontSize: 72
        })
        container.addChild(title)
        title.anchor.set(0.5)
        title.position.set(
            this.app.screen.width / 2,
            230
        )
        // Rounded Container
        const graphics = new Graphics()
        graphics.lineStyle(3, 0x000000, 0.7)
        graphics.beginFill(0x000000, 0.25)
        graphics.drawRoundedRect(26, 340, 715, 365, 8)
        graphics.endFill()
        container.addChild(graphics)
        // Scratcher
        const scratcher = this.buildScratcher()
        container.addChild(scratcher)
        scratcher.position.set(
            this.app.screen.width / 2 - scratcher.width / 2,
            350
        )
        // Scratch All Button
        const scratchAll = buildButton(this.tiles['button9s.png'], {
            labelText: 'View Results',
            textStyle: {
                ...defaultTextStyle,
                fontSize: 64
            }, 
            height: 120
        })
        container.addChild(scratchAll)
        scratchAll.position.set(
            this.app.screen.width / 2 - scratchAll.width / 2,
            800
        )
        scratchAll.on('pointerdown', this.scratchAll.bind(this))
        return container
    }

    buildWinningBoard() {
        const results = this.store.state.roundResults
        const winningBoard = results.generatedBoard.board
        const resultsBoard = results.resultsBoard
        const container = new Container()
        // Build Tiles
        const tilesContainer = new Container()
        container.addChild(tilesContainer)
        tilesContainer.filters = [noise]
        const GUESS_PADDING = 5
        const COLS = 10
        for (let i = 0; i < winningBoard.length; i++) {
            const tile = new Sprite(this.tiles[ANIMAL_TEXTURES[winningBoard[i]]])
            if (resultsBoard[i].hitType === null) {
                tile.filters = [missFilter]
            } else {
                const multiplier = new Text(resultsBoard[i].multiplier, {
                    ...defaultTextStyle,
                    fill: colors.yellow,
                    fontSize: 32
                })
                multiplier.anchor.set(0.5)
                tile.addChild(multiplier)
                multiplier.position.set(
                    tile.width / 2,
                    tile.height - multiplier.height / 2
                )
            }
            tilesContainer.addChild(tile)
            tile.position.set(
                (i % COLS * tile.width) + (i % COLS * GUESS_PADDING),
                Math.floor(i / COLS) * tile.height + Math.floor(i / COLS) * GUESS_PADDING
            )
        }
        return container
    }

    buildScratchableBoard() {
        const container = new Container()
        // Build Tiles
        const tilesContainer = new Container()
        container.addChild(tilesContainer)
        const GUESS_PADDING = 5
        const COLS = 10
        for (let i = 0; i < 50; i++) {
            const tile = new Sprite(this.tiles['eggTile.png'])
            tilesContainer.addChild(tile)
            tile.position.set(
                (i % COLS * tile.width) + (i % COLS * GUESS_PADDING),
                Math.floor(i / COLS) * tile.height + Math.floor(i / COLS) * GUESS_PADDING
            )
        }
        return container
    }

    buildScratcher() {
        const container = new Container()
        // Scratchable Board
        const scratchableBoard = this.buildScratchableBoard()
        container.addChild(scratchableBoard)
        // Winning Board
        this.winningBoard = this.buildWinningBoard()
        container.addChild(this.winningBoard)
        // Mask
        const rt = RenderTexture.create({
            width: this.winningBoard.width,
            height: this.winningBoard.height
        })
        const rtSprite = new Sprite(rt)
        container.addChild(rtSprite)
        this.winningBoard.mask = rtSprite
        // Interaction
        let dragging = false;
        const pointerMove = (event) => {
            if (dragging) {
                // Set brush position to rtSprite local offset of global position
                rtSprite.toLocal(event.data.global, null, brush)
                this.app.renderer.render(brush, {
                    renderTexture: rt,
                    clear: false
                });
            }
        }
        const pointerDown = (event) => {
            dragging = true;
            pointerMove(event);
        }
        const pointerUp = (event) => {
            dragging = false;
        }
        rtSprite.interactive = true
        rtSprite.on('pointerdown', pointerDown);
        rtSprite.on('pointerup', pointerUp);
        rtSprite.on('pointermove', pointerMove);
        return container
    }

    scratchAll() {
        // this.winningBoard.mask = null
        audio.playAudio(audio.audioFiles.win)
        this.sceneManager.display('results')
    }
}
