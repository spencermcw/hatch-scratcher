import { Sprite, Container } from 'pixi.js'
import Scene from './baseScene';
import { buildButton } from "../lib/factories";
import { DropShadowFilter } from "pixi-filters";
import { ACTIONS, MUTATIONS } from "../store/store";
import * as audio from "../lib/audio";

export default class ConnectScene extends Scene {
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        // Splash Screen Image
        const splash = new Sprite(this.resources['assets/images/splash.png'].texture)
        this.container.addChild(splash)
        // Login Button
        const loginButton = buildButton(this.tiles['button9s.png'], {
            labelText: 'Login',
            filters: [new DropShadowFilter()]
        })
        this.container.addChild(loginButton)
        loginButton.position.set(
            splash.width / 2 - loginButton.width / 2,
            splash.height / 2 + 150
        )
        loginButton.on('pointerup', () => {
            audio.playAudio(audio.audioFiles.popclick)
            this.store.commit(MUTATIONS.SET_LOADING_TEXT, `Loading Account...\n${window.walletAddress}`)
            this.sceneManager.display('loading')
            this.store.dispatch(ACTIONS.CONNECT)
                .then(() => this.sceneManager.display('wager'))
                .catch(error => {
                    if (error.response)
                        alert(error.response.data)
                    this.sceneManager.display('connect')
                })
        })
    }
}

