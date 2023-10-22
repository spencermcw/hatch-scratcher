import { Sprite, Text, Container } from 'pixi.js'
import Scene from './baseScene';
import { defaultTextStyle } from "../constants";

export default class LoadingScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        // Splash Screen Image
        const splash = new Sprite(this.resources['assets/images/splash.png'].texture)
        this.container.addChild(splash)
        // Loading Container
        const loadingContainer = new Container()
        this.container.addChild(loadingContainer)
        // Spinner
        const spinner = new Sprite(this.tiles['eggTileWhite.png'])
        loadingContainer.addChild(spinner)
        spinner.anchor.set(0.5)
        this.app.ticker.add((delta) => {
            spinner.rotation += 0.1 * delta
        })
        // Loading
        const loading = new Text(this.store.state.loadingText, { ...defaultTextStyle, align: 'center' })
        loadingContainer.addChild(loading)
        loading.anchor.set(0.5)
        loading.position.set(spinner.x, spinner.height + 25)
        // Position
        loadingContainer.position.set(
            splash.width / 2,
            splash.height / 2 + 175
        )
    }
}

