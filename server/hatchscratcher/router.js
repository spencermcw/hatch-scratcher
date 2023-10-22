const ethers = require('ethers').ethers
const router = require('express').Router()
const game = require('./game')
const db = require('./db')
const { ANIMALS_ORDERED, RARITIES } = require('./animals')
const contracts = require('./contracts')
const Decimal = require("decimal.js")


router.post('/connect/:wallet', async (req, res) => {
    const { wallet } = req.params
    const user = await db.fetchUser(wallet)
    if (user === null) {
        req.session.destroy()
        return res.status(400).send("Deposit $ZOO using Arcade to create Account")
    } else {
        req.session.wallet = wallet
        return res.status(200).send(user)
    }
})


router.use('/session', async (req, res, next) => {
    if (req.session.wallet) {
        const user = await db.fetchUser(req.session.wallet)
        req.user = user
        return next()
    } else {
        req.session.destroy()
        return res.status(400).send("No Session")
    }
})


router.get('/session', (req, res) => {
    res.send(req.user).status(200)
})


router.post('/session/withdraw', async (req, res) => {
    const user = req.user
    // Check Rollover
    if (new Decimal(user.rollover).gt(0)) {
        return res.status(400).send("Outstanding Rollover")
    }
    // Check Balance
    if (new Decimal(user.balance).lt(1)) {
        return res.status(400).send("Insufficient Balance")
    }
    const { HATCH_SCRATCHER_OPERATOR_KEY, ZOO_CONTRACT_ADDRESS } = process.env
    const signer = new ethers.Wallet(HATCH_SCRATCHER_OPERATOR_KEY, contracts.provider)
    // Chain Txn
    console.log(ethers.utils.parseEther(user.balance));
    const txn = await contracts.game.connect(signer).withdraw(user._id, ethers.utils.parseEther(user.balance), ZOO_CONTRACT_ADDRESS)
    // DB Txn
    const updateFilter = { _id: user._id }
    const updateDoc = {
        $set: { balance: "0" },
        $push: { withdraws: txn.hash }
    }
    const result = db.updateUser(updateFilter, updateDoc)
    return result === null ?
        res.status(500).send("Account Update Failed") : 
        res.sendStatus(200);
})


router.post('/session/play', async (req, res) => {
    const { bet, board } = req.body
    const user = req.user
    const gameResults = game.play(bet, board)
    const { totalBet, totalWon, squaresBet } = gameResults
    // Minimum Bet
    if (new Decimal(bet).lt(1)) {
        return res.status(400).send("Bet too small")
    }
    // Max Bet
    if (new Decimal(bet).gt(200000)) {
        return res.status(400).send("Bet too large")
    }
    // Total Bets
    if (squaresBet === 0) {
        return res.status(400).send("No tiles bet")
    }
    // Check Balance
    if (totalBet.gt(user.balance)) {
        return res.status(400).send("Wager Exceeds Balance")
    }
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
    // DB Txn
    const updateFilter = { _id: user._id }
    const updateDoc = {
        $set: { ...updatedUser },
        $push: {
            games: {
                guessedBoard: board.join(', '),
                bet: gameResults.bet,
                boardUUID: gameResults.generatedBoard.uuid,
            }
        }
    }
    const result = await db.updateUser(updateFilter, updateDoc)
    return result === null ?
        res.status(500).send("Account Update Failed") : 
        res.status(200).send({ results: gameResults, user: updatedUser })
})


router.get('/game/board', async (req, res) => {
    const { uuid, includeRarities, fill } = req.body
    const values = ANIMALS_ORDERED
    // Rarities
    if (includeRarities)
        values.push(...Object.values(RARITIES))
    // Board Generation
    const board = game.generateBoard(values, uuid)
    // Randomize Missing board spaces
    if (fill)
        board.board = board.board.map(i => Math.random() < fill ? i : null)
    return res.status(200).send(board)
})

module.exports = router
