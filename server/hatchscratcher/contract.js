const ethers = require('ethers').ethers
const db = require('./db')

const { HATCH_SCRATCHER_CONTRACT_ADDRESS } = process.env

const { arcade } = require('./contracts')

const filter = arcade.filters.Deposited(null, HATCH_SCRATCHER_CONTRACT_ADDRESS)

arcade.on(filter, async (player, game, amount, event) => {
    let user = await db.fetchUser(player)
    const wallet = ethers.utils.getAddress(player)
    // Create new "Account"
    if (user === null) {
        user = await db.createUser(player, event.blockNumber)
    }
    // Update "Account"
    else if (user.lastDepositBlock < event.blockNumber) {
        const updateFilter = { _id: wallet }
        const updateDoc = {
            $set: {
                deposits: ethers.utils.formatEther(ethers.utils.parseEther(user.deposits).add(amount).toString()),
                balance: ethers.utils.formatEther(ethers.utils.parseEther(user.balance).add(amount).toString()),
                rollover: ethers.utils.formatEther(ethers.utils.parseEther(user.rollover).add(amount).toString()),
                lastDepositBlock: event.blockNumber,
            }
        }
        await db.updateUser(updateFilter, updateDoc)
    }
})
