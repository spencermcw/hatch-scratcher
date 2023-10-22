const ethers = require('ethers').ethers
const Decimal = require('decimal.js')
const client = require('../db-client').client
const { game } = require('./contracts')

const { DB_DB, DB_COLLECTION } = process.env

const fetchUser = async (wallet) => {
    try {
        await client.connect()
        const db = client.db(DB_DB).collection(DB_COLLECTION)
        const address = ethers.utils.getAddress(wallet)
        const user = await db.findOne({ _id: address }, { projection: { games: false } })
        await client.close()
        return user
    } catch (e) {
        await client.close()
        console.error(e)
        return null
    }
}

const createUser = async (wallet, blockNumber) => {
    try {
        const deposits = Decimal('0.95').mul(ethers.utils.formatEther((await game.depositsOf(wallet)).toString())).toString()
        await client.connect()
        const db = client.db(DB_DB).collection(DB_COLLECTION)
        const newUser = {
            "_id": ethers.utils.getAddress(wallet),
            "hits": 0,
            "balance": deposits,
            "winnings": "0",
            "wagers": "0",
            "rollover": deposits,
            "deposits": deposits,
            "lastDepositBlock": blockNumber,
            "games": [],
            "withdraws": [],
        }
        await db.insertOne(newUser)
        client.close()
        return newUser
    } catch (e) {
        client.close()
        console.error(e)
        return null
    }
}

const updateUser = async (updateFilter, updateDoc) => {
    try {
        await client.connect()
        const db = client.db(DB_DB).collection(DB_COLLECTION)
        const result = await db.updateOne(updateFilter, updateDoc)
        if (result.modifiedCount !== 1) {
            await client.close()
            return null
        }
        return result
    } catch (e) {
        await client.close()
        console.error(e)
        return null
    }
}

module.exports = {
    fetchUser,
    createUser,
    updateUser,
}
