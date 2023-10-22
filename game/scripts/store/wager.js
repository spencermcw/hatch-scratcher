import { ANIMAL_ORDER, ANIMAL_TEXTURES } from "./animals"

export const NAMESPACE = 'wager'

export const MUTATIONS = {
    SET_SELECTED_GUESS_KEY: 'SET_SELECTED_GUESS_KEY',
    SET_GUESS_AT_INDEX: 'SET_GUESS_AT_INDEX',
    SET_RENTALS: 'SET_RENTALS',
    CLEAR_GUESS_BOARD: 'CLEAR_GUESS_BOARD',
    SET_WAGER_INCREMENT: 'SET_WAGER_INCREMENT',
    INCREMENT_WAGER: 'INCREMENT_WAGER',
    DECREMENT_WAGER: 'DECREMENT_WAGER',
}

export const GETTERS = {
    GUESS_TILES: 'GUESS_TILES',
    TOTAL_GUESSES: 'TOTAL_GUESSES',
}

export const MODULE = {
    namespaced: true,

    state: () => ({
        selectedGuessKey: null,
        guessBoard: Array.from({ length: 50 }, () => null),
        wager: 1000,
        wagerIncrement: 1000,
        wagerMin: 1,
        wagerMax: 200000,
        rentals: null,
        guessTileTextures: {
            ...ANIMAL_TEXTURES,
            'COMMON': 'commonTile.png',
            'UNCOMMON': 'uncommonTile.png',
            'RARE': 'rareTile.png',
            'SUPER_RARE': 'superrareTile.png',
            'EPIC': 'epicTile.png'
        }
    }),

    mutations: {
        [MUTATIONS.SET_SELECTED_GUESS_KEY]: (state, key) => {
            state.selectedGuessKey = key
        },
        [MUTATIONS.SET_RENTALS]: (state, rentals) => {
            state.rentals = {...rentals}
        },
        [MUTATIONS.CLEAR_GUESS_BOARD]: (state) => {
            state.guessBoard = Array.from({ length: 50 }, () => null)
        },
        [MUTATIONS.SET_GUESS_AT_INDEX]: (state, { index, guess }) => {
            state.guessBoard[index] = guess
        },
        [MUTATIONS.SET_WAGER_INCREMENT]: (state, wagerIncrement) => {
            state.wagerIncrement = wagerIncrement
        },
        [MUTATIONS.INCREMENT_WAGER]: (state) => {
            state.wager += state.wagerIncrement
            if (state.wager > state.wagerMax)
                state.wager = state.wagerMax
        },
        [MUTATIONS.DECREMENT_WAGER]: (state) => {
            state.wager -= state.wagerIncrement
            if (state.wager < state.wagerMin)
                state.wager = state.wagerMin
        }
    },

    getters: {
        [GETTERS.GUESS_TILES]: (state) => {
            const rarities = ['COMMON', 'UNCOMMON', 'RARE', 'SUPER_RARE', 'EPIC']
                .map(key => ({
                    key: key,
                    textureKey: state.guessTileTextures[key],
                }))
            return ANIMAL_ORDER
                .map(key => ({
                    key: key,
                    textureKey: state.guessTileTextures[key],
                }))
                .concat(rarities)
        },
        [GETTERS.TOTAL_GUESSES]: (state) => {
            return state.guessBoard.filter(g => g !== null).length
        }
    },
}

export default MODULE
