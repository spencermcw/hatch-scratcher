const db = require('../hatchscratcher/db');
const ethers = require('ethers').ethers;

(async () => {
    const wallet_ = process.argv[2]
    const wallet = ethers.utils.getAddress(wallet_);
    const record = await db.fetchUser(wallet);
    console.log(record);
    if (record !== null) {
        console.log('User Already Exists');
        return;
    }
    await db.createUser(wallet_, 0)
    console.dir('User Created:', wallet_)
})()
    .then(() => process.exit())
    .catch(() => process.exit());
