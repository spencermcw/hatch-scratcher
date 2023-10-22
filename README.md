# Hatch Scratcher
A scratch-off-style game designed to leverage the Blockchain Arcade contracts and dApp.

# Branches
The `standalone` branch is an altered version to show a demo of the game without the overhead of a blockchain, express server, and MongoDB.

# Motivation & Features
A notable implementation hurdle with this project was having the Web2 (Express) server communicate with the EVM to transact `ERC-20s` when users wanted to withdraw their funds. This game consisted of a PixiJS game and an ExpressJS server to manage user balances.

# Technology
- [PixiJS](https://pixijs.com/)
- EthersJS
- ExpressJS
- MongoDB
