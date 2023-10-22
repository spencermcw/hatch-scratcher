import { Text, NineSlicePlane } from "pixi.js";
import { defaultTextStyle } from "../constants";
import { GlowFilter } from "pixi-filters";

const glow = new GlowFilter({
    outerStrength: 0,
    innerStrength: 2,
    color: 0x000000,
    distance: 30
})

export const buildButton = (nineSliceTexture, options) => {
    const button = new NineSlicePlane(nineSliceTexture, 15, 15, 15, 15);
    button.interactive = true
    button.buttonMode = true
    button.down = false
    if (options.width) {
        button.width = options.width
    }
    if (options.height) {
        button.height = options.height
    }
    const defaultFilters = options.filters ? options.filters : []
    if (defaultFilters.length) {
        button.filters = defaultFilters
    }
    const buttonDown = () => {
        button.down = true
        button.filters = [...defaultFilters, glow]
    }
    const buttonUp = () => {
        if (button.down) {
            button.down = false
            button.filters = [...defaultFilters]
        }
    }
    button.on('pointerdown', buttonDown)
    button.on('pointerup', buttonUp)
    button.on('pointerout', buttonUp)
    if (options.labelText) {
        const textStyle = options.textStyle ? options.textStyle : defaultTextStyle
        const label = new Text(options.labelText, textStyle)
        button.addChild(label)
        label.anchor.set(0.5)
        if (!options.width) {
            button.width = label.width + 75 
        }
        label.position.set(
            button.width / 2,
            button.height / 2
        )
    }
    return button
}
