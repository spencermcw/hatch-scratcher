import { Sprite, Text, Container } from 'pixi.js'
import Scene from './baseScene';
import { defaultTextStyle } from "../constants";
import { DropShadowFilter } from "pixi-filters";
import { buildButton } from "../lib/factories";


export default class RolloverScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()

        // Backgrounds
        const background = new Sprite(this.resources['assets/images/background.png'].texture)
        this.container.addChild(background)

        // Rollover Outline
        const rollover = new Sprite(this.resources['assets/images/rollover.png'].texture)
        this.container.addChild(rollover)
        rollover.filters = [new DropShadowFilter()]
        // rollover.anchor.set(0.5)
        rollover.position.set(
            background.width/2 - rollover.width/2,
            background.height/2 - rollover.height/2 + 50
        )
        
        // Disclaimer
        const disclaimer = new Text(
            "You must wager the entirety of\nyour deposit prior to\nwithdrawing your game balance",
            {
                ...defaultTextStyle,
                align: "center"
            }
        )
        rollover.addChild(disclaimer)
        disclaimer.position.set(rollover.width / 2 - disclaimer.width / 2, 140)

        // Total Deposits
        // Container
        const totalDepositsContainer = new Container()
        rollover.addChild(totalDepositsContainer)
        totalDepositsContainer.position.set(85, 276)
        // Label
        const totalDepositsText = new Text("Total Deposits", { ...defaultTextStyle })
        totalDepositsContainer.addChild(totalDepositsText)
        // Value
        const totalDepositsValue = new Text("NAN $ZOO", { ...defaultTextStyle, align: "right" })
        totalDepositsContainer.addChild(totalDepositsValue)
        totalDepositsValue.position.set(525 - totalDepositsValue.width, totalDepositsText.y)

        // Total Wagered
        // Container
        const totalWagersContainer = new Container()
        rollover.addChild(totalWagersContainer)
        totalWagersContainer.position.set(85, 336)
        // Label
        const totalWagersText = new Text("Total Wagered", { ...defaultTextStyle })
        totalWagersContainer.addChild(totalWagersText)
        // Value
        const totalWagersValue = new Text("NAN $ZOO", { ...defaultTextStyle, align: "right" })
        totalWagersContainer.addChild(totalWagersValue)
        totalWagersValue.position.set(525 - totalWagersValue.width, totalWagersText.y)

        // Total Wagered
        // Container
        const totalRolloverContainer = new Container()
        rollover.addChild(totalRolloverContainer)
        totalRolloverContainer.position.set(85, 396)
        // Label
        const totalRolloverText = new Text("Remaining", { ...defaultTextStyle })
        totalRolloverContainer.addChild(totalRolloverText)
        // Value
        const totalRolloverValue = new Text("NAN $ZOO", { ...defaultTextStyle, align: "right" })
        totalRolloverContainer.addChild(totalRolloverValue)
        totalRolloverValue.position.set(525 - totalRolloverValue.width, totalRolloverText.y)

        // Continue
        const continueButton = buildButton(this.tiles['button9s.png'], { labelText: 'Continue' })
        rollover.addChild(continueButton)
        continueButton.position.set(rollover.width / 2 - continueButton.width / 2, 600)
    }
}

