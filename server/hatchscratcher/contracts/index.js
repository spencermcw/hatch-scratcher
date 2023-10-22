const { ethers } = require('ethers')
const {
    ARCADE_CONTRACT_ADDRESS,
    HATCH_SCRATCHER_CONTRACT_ADDRESS,
    JSON_RPC_URL,
} = process.env

const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_URL)

const arcade = new ethers.Contract(
    ARCADE_CONTRACT_ADDRESS,
    require('./Arcade.json').abi,
    provider
)

const game = new ethers.Contract(
    HATCH_SCRATCHER_CONTRACT_ADDRESS,
    require('./Game.json').abi,
    provider
)

module.exports = {
    arcade,
    game,
    provider
}
