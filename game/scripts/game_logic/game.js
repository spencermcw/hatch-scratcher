import seedrandom from 'seedrandom'
import { v4 as uuidv4 } from 'uuid'
import Decimal from 'decimal.js'
const SECRET = "secret";
import { ANIMALS_ORDERED, ANIMAL_RARITIES, RARITIES } from './animals';

const RARITY_PROBABILITIES = {
    [RARITIES.COMMON]: new Decimal('0.25'),
    [RARITIES.UNCOMMON]: new Decimal('0.25'),
    [RARITIES.RARE]: new Decimal('0.25'),
    [RARITIES.SUPER_RARE]: new Decimal('0.125'),
    [RARITIES.EPIC]: new Decimal('0.125'),
}

const EDGE = new Decimal('1.1')

const calcWin = (bet, probability) => {
    return EDGE.div(probability).mul(bet)
}

export const generateBoard = (values_, uuid_) => {
    // RNG
    const uuid = (uuid_ === null || uuid_ === undefined) ? uuidv4() : uuid_
    const seed = `${uuid}:${SECRET}`
    const rng = seedrandom(seed)
    // Generation
    const BOARD_SIZE = 50
    const board = Array.from(
        { length: BOARD_SIZE },
        () => values_[Math.floor(rng() * values_.length)]
    )
    return { 
        uuid,
        board,
    }
}

export const play = (bet, betBoard) => {
    const generatedBoard = generateBoard(ANIMALS_ORDERED)
    const winningBoard = generatedBoard.board
    const resultsBoard = winningBoard.map((animal, index) => {
        const guess = betBoard[index]
        let won = new Decimal(0)
        let multiplier = null
        let probability = null
        let hitType = null
        // Rarity Hit
        if (guess === ANIMAL_RARITIES[animal]) {
            probability = RARITY_PROBABILITIES[guess]
            hitType = guess
        }
        // Animal Hit 
        else if (guess === animal) {
            probability = '0.0625'
            hitType = 'ANIMAL'
        }
        if (hitType !== null) {
            won = calcWin(bet, probability)
            multiplier = `${EDGE.div(probability).toFixed(1)}x`
        }
        return {
            won,
            multiplier,
            hitType,
        }
    })
    const squaresBet = betBoard.filter(s => s !== null).length
    const totalBet = new Decimal(bet).mul(squaresBet)
    const totalWon = resultsBoard.reduce((p, c) => c.won.add(p), 0)
    // Results
    return {
        bet,
        resultsBoard,
        generatedBoard,
        squaresBet,
        totalBet,
        totalWon,
    }
}
