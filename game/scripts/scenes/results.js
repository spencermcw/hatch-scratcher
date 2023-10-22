import Scene from "./baseScene";
import { Container, Sprite, Text } from "pixi.js";
import { DropShadowFilter } from "pixi-filters";
import { buildButton } from "../lib/factories";
import { colors, defaultTextStyle } from "../constants";
import { Decimal } from 'decimal.js';
import * as audio from '../lib/audio'

export default class ResultsScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        // Background
        const background = new Sprite(this.resources['assets/images/background.png'].texture)
        this.container.addChild(background)
        // Modal
        const modal = this.buildModal()
        this.container.addChild(modal)
        modal.position.set(
            background.width / 2 - modal.width / 2,
            background.height / 2 - modal.height / 2 + 30
        )
    }

    buildModal() {
        // Modal
        const modalContainer = new Container()
        modalContainer.filters = [new DropShadowFilter({
            distance: 20,
            blur: 5
        })]
        const modal = new Sprite(this.resources['assets/images/results.png'].texture)
        modalContainer.addChild(modal)
        // Texts
        const results = this.store.state.roundResults.resultsBoard

        const stats = {
            BASE_ANIMALS: {
                title: 'Animals',
                hits: results.filter(r => r.hitType === 'ANIMAL').length,
                sum: results.filter(r => r.hitType === 'ANIMAL').reduce((p,c) => new Decimal(p).add(c.won), 0),
            },
            EPIC: {
                title: 'Epics',
                hits: results.filter(r => r.hitType === 'EPIC').length,
                sum: results.filter(r => r.hitType === 'EPIC').reduce((p,c) => new Decimal(p).add(c.won), 0),
            },
            SUPER_RARE: {
                title: 'Super Rares',
                hits: results.filter(r => r.hitType === 'SUPER_RARE').length,
                sum: results.filter(r => r.hitType === 'SUPER_RARE').reduce((p,c) => new Decimal(p).add(c.won), 0),
            },
            RARE: {
                title: 'Rares',
                hits: results.filter(r => r.hitType === 'RARE').length,
                sum: results.filter(r => r.hitType === 'RARE').reduce((p,c) => new Decimal(p).add(c.won), 0),
            },
            UNCOMMON: {
                title: 'Uncommons',
                hits: results.filter(r => r.hitType === 'UNCOMMON').length,
                sum: results.filter(r => r.hitType === 'UNCOMMON').reduce((p,c) => new Decimal(p).add(c.won), 0),
            },
            COMMON: {
                title: 'Commons',
                hits: results.filter(r => r.hitType === 'COMMON').length,
                sum: results.filter(r => r.hitType === 'COMMON').reduce((p,c) => new Decimal(p).add(c.won), 0),
            }
        }
        Object.keys(stats).forEach((stat, index) => {
            const { title, hits, sum } = stats[stat]
            const tContainer = new Container()
            // Title
            const titleText = new Text(title, {
                ...defaultTextStyle,
                fontSize: 28
            })
            tContainer.addChild(titleText)
            // Hits
            const hitsText = new Text(hits, {
                ...defaultTextStyle,
                fontSize: 28,
                fill: hits === 0 ? colors.gray : colors.green
            })
            tContainer.addChild(hitsText)
            hitsText.position.set(245, 0)
            // Winnings
            const sumText = new Text(`+ ${Number(sum).toLocaleString('en-US')} $ZOO`, {
                ...defaultTextStyle,
                fontSize: 28,
                fill: hits === 0 ? colors.gray : colors.yellow
            })
            tContainer.addChild(sumText)
            sumText.position.set(hitsText.x + 270 - sumText.width, 0)
            // Add to container
            modalContainer.addChild(tContainer)
            tContainer.position.set(
                90,
                150 + (34 * index)
            )
        })
        // Wager Texts
        const wagerTotal = this.store.state.roundResults.totalBet
        const squaresBet = this.store.state.roundResults.squaresBet
        const perSquare = new Decimal(wagerTotal).div(squaresBet)
        const wagerTotalTextTitle = new Text('Total Wagered', {
            ...defaultTextStyle,
            fontSize: 28
        })
        modalContainer.addChild(wagerTotalTextTitle)
        wagerTotalTextTitle.position.set(90, 370)
        const wagerTotalText = new Text(
            `${Number(wagerTotal).toLocaleString('en-US')} $ZOO`,
        {
            ...defaultTextStyle,
            fontSize: 28
        })
        modalContainer.addChild(wagerTotalText)
        wagerTotalText.position.set(
            610 - wagerTotalText.width,
            370
        )
        // Per Square
        const wagerPerSquareText = new Text(
            `${Number(perSquare).toLocaleString('en-US')} $ZOO/sq`,
        {
            ...defaultTextStyle,
            fontSize: 28
        })
        modalContainer.addChild(wagerPerSquareText)
        wagerPerSquareText.position.set(
            610 - wagerPerSquareText.width,
            405
        )
        const totalWin = Object.values(stats).reduce((p, c) => new Decimal(p).add(c.sum), 0)
        const totalWinText = new Text(
            `${Number(totalWin).toLocaleString('en-US')} $ZOO`,
            {
                ...defaultTextStyle,
                fontSize: 64,
                strokeThickness: 6
            }
        )
        modalContainer.addChild(totalWinText)
        totalWinText.position.set(
            modalContainer.width / 2 - totalWinText.width / 2 + 10,
            600
        )
        // Button
        const button = buildButton(this.tiles['button9s.png'], {
            labelText: 'Play Again',
            filters: [new DropShadowFilter()]
        })
        modalContainer.addChild(button)
        button.position.set(
            modalContainer.width / 2 - button.width / 2,
            680
        )
        button.on('pointerdown', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.sceneManager.display('wager')
        })
        return modalContainer
    }
}
