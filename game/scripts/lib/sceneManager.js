
export default class SceneManager {
    constructor(app) {
        this.app = app
        this.stage = app.stage 
        this.scenes = {}
        this.activeScene = ''
    }

    add(key, scene) {
        scene.sceneManager = this
        this.scenes[key] = scene
    }

    display(key) {
        const scene = this.scenes[key]
        if (!scene.loaded) {
            scene.load()
        }
        if (this.activeScene !== key && this.activeScene !== '') {
            this.scenes[this.activeScene].destroy()
        }
        this.stage.addChild(scene.container)
        this.activeScene = key
    }

    redraw() {
        const scene = this.scenes[this.activeScene]
        scene.destroy()
        scene.load()
        this.stage.addChild(scene.container)
    }
}
