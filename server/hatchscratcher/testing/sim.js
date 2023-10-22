const fs = require('fs')
const game = require('../game')
const { ANIMALS_ORDERED, RARITIES_ORDERED } = require('../animals')

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const DELIM = '\t'
const ITERATIONS = 1

for (let j = 0; j < ITERATIONS; j++) {
    let totalBets = 0
    let totalWinnings = 0
    let netPayout = 0
    let winners = 0
    let losers = 0

    const rounds = 1
    for (let i = 0; i < rounds; i++) {
        let betBoard = game.generateBoard([...ANIMALS_ORDERED, ...RARITIES_ORDERED]).board
        // const bet = rng(1, 200000)
        const bet = 200000
        // // Random empty spaces
        // betBoard = betBoard.map(s => Math.random() > 0.1 ?  s : undefined)
        const result = game.play(bet, betBoard)
        console.log(result)
        totalBets += Number(result.totalBet)
        totalWinnings += Number(result.totalWon)
        const payout = Number(result.totalWon) - Number(result.totalBet)
        netPayout += payout

        if (payout > 0) {
            winners++
            // console.log(`Run ${i}\t Bet: ${result.totalBet.toLocaleString('en-US')} \t Win: ${result.totalWin.toLocaleString('en-US')} \t Net: ${result.netWin.toLocaleString('en-US')}`)
        } else {
            losers++
        }
    }

    const stats = {
        rounds,
        totalBets: totalBets.toLocaleString('en-US'),
        totalWinnings: totalWinnings.toLocaleString('en-US'),
        netPayout: netPayout.toLocaleString('en-US'),
        winners,
        losers
    }

    if (j === 0) {
        fs.appendFileSync('out.csv', Object.keys(stats).join(DELIM) + '\n')
    }

    const results = Object.keys(stats).map(key => stats[key].toString()).join(DELIM) + '\n'
    fs.appendFileSync('out.csv', results)
}
