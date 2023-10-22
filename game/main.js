// require('dotenv').config()
import {
    Application,
    utils as PIXIutils
} from 'pixi.js'
import * as WebFont from 'webfontloader'
import SceneManager from "./scripts/lib/sceneManager"
import ConnectScene from "./scripts/scenes/connect"
import ResultsScene from "./scripts/scenes/results"
import ScratcherScene from "./scripts/scenes/scratcher"
import SplashScreenScene from './scripts/scenes/splashScreen'
import PredictScene from "./scripts/scenes/wager"
import LoadingScene from "./scripts/scenes/loading"
import RolloverScene from "./scripts/scenes/rollover"
import store from './scripts/store/store'

// Font Loading
WebFont.load({
    custom: {
        families: ['Ghoulish'],
        urls: [import.meta.env.BASE_URL + 'assets/GhoulFriAOE.ttf']
    }
})

// Initialize App
const app = new Application({
    width: 768,
    height: 1024,
    resolution: 1,
    backgroundColor: '0x3F9BD4',
    // antialias: true
})
const viewContainer = document.querySelector('#canvas-container')
viewContainer.appendChild(app.view)

// PIXI Initialization Console Log
const type = PIXIutils.isWebGLSupported() ? 'WebGL' : 'canvas'
PIXIutils.sayHello(type)

// Scene Declarations
const sceneManager = new SceneManager(app)

// Load Assets
app.loader
    .add('assets/images/background.png', import.meta.env.BASE_URL + 'assets/images/background.png')
    .add('assets/images/results.png', import.meta.env.BASE_URL + 'assets/images/results.png')
    .add('assets/images/rollover.png', import.meta.env.BASE_URL + 'assets/images/rollover.png')
    .add('assets/images/splash.png', import.meta.env.BASE_URL + 'assets/images/splash.png')
    .add('assets/tiles/tiles.json', import.meta.env.BASE_URL + 'assets/tiles/tiles.json')
    .add('assets/titles/titles.json', import.meta.env.BASE_URL + 'assets/titles/titles.json')
    .add('assets/previews/previews.json', import.meta.env.BASE_URL + 'assets/previews/previews.json')
    .load(setup)

// Setup
function setup(loader, resources) {
    const context = { app, resources, store }
    sceneManager.add('splash', new SplashScreenScene(context))
    sceneManager.add('connect', new ConnectScene(context))
    sceneManager.add('wager', new PredictScene(context))
    sceneManager.add('scratcher', new ScratcherScene(context))
    sceneManager.add('results', new ResultsScene(context))
    sceneManager.add('loading', new LoadingScene(context))
    sceneManager.add('rollover', new RolloverScene(context))
    start()
}

// Startup
async function start() {
    // sceneManager.display('splash')
    // await sleep(1000)
    sceneManager.display('connect')
    // sceneManager.display('wager')
    // sceneManager.display('scratcher')
    // sceneManager.display('results')
    // sceneManager.display('rollover')
}

window.addEventListener('message', (e) => {
    const { walletAddress } = e.data
    if (walletAddress) {
        window.walletAddress = walletAddress
    }
})
