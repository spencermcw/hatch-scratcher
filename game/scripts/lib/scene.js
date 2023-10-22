import { Container } from "pixi.js"

export default class Scene {
    app
    resouces
    container
    sceneManager
    loaded
    displayObjects

    constructor(context) {
        this.app = context.app
        this.resources = context.resources
        this.loaded = false
        this.displayObjects = {}
    }

    destroy() {
        this.container.destroy()
        this.loaded = false
        this.displayObjects = {}
    }

    load() { throw new Error('Not Implemented') }
    draw() { throw new Error('Not Implemented') }
}
