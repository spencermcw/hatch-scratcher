import { Text, Sprite, Container } from 'pixi.js';
import Scene from "./baseScene";
import { defaultTextStyle } from '../constants'


export default class SplashScreenScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        // Splash Screen Image
        const splash = new Sprite(this.resources['assets/images/splash.png'].texture)
        this.container.addChild(splash)
        // Loading Text
        const text = new Text('Loading...', {
            ...defaultTextStyle,
            fontSize: 48
        })
        this.container.addChild(text)
        text.anchor.set(0.5)
        text.position.set(
            splash.width / 2 + 10,
            splash.height / 2 + 150
        )
        this.loaded = true
    }
}
