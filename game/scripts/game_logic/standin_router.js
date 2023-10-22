import * as game from './game';
import Decimal from 'decimal.js'

export const connect = (req) => {
    const deposits = 1000000;
    const wallet = "0x0000000000000000";
    return {
        "_id": wallet,
        "hits": 0,
        "balance": deposits,
        "winnings": "0",
        "wagers": "0",
        "rollover": deposits,
        "deposits": deposits,
        "lastDepositBlock": 0,
        "games": [],
        "withdraws": [],
    }
}

export const play = (req) => {
    const { bet, board } = req.body;
    const user = req.user
    const gameResults = game.play(bet, board)
    const { totalBet, totalWon, squaresBet } = gameResults
    // Minimum Bet
    if (new Decimal(bet).lt(1)) {
        return { err: "Bet too small" };
    }
    // Max Bet
    if (new Decimal(bet).gt(200000)) {
        return { err: "Bet too large" };
    }
    // Total Bets
    if (squaresBet === 0) {
        return { err: "No tiles bet" };
    }
    // // Check Balance
    // if (totalBet.gt(user.balance)) {
    //     return { err: "Wager Exceeds Balance" }
    // }
    // Calculate User Updates
    const newBalance = new Decimal(user.balance).sub(totalBet).add(totalWon).toString()
    const numHits = gameResults.resultsBoard.filter(result => result.hitType !== null).length
    const winnings = new Decimal(user.winnings).add(totalWon).toString()
    const wagers = new Decimal(user.wagers).add(totalBet).toString()
    const rollover_ = new Decimal(user.rollover)
    const rollover = rollover_.lte(totalBet) ? "0" : rollover_.sub(totalBet).toString()
    // Updated User
    const updatedUser = {
        balance: newBalance,
        rollover,
        winnings,
        wagers,
        hits: user.hits + numHits, 
    }
    return ({ results: gameResults, user: updatedUser });
}
