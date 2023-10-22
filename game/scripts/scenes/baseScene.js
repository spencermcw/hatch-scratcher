import Scene from "../lib/scene";

export default class BaseScene extends Scene {
    // Vuex
    store
    // Tile Resources
    tiles
    // Title Resources
    titles

    constructor(context) {
        super(context)
        this.store = context.store
        // Resource Aliases
        this.tiles = this.resources['assets/tiles/tiles.json'].spritesheet.textures
        this.titles = this.resources['assets/titles/titles.json'].spritesheet.textures
    }
}
