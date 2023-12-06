const { exec } = require("child_process");

const chains = [
    421614,		// arbitrum-sepolia
    43113,		// avalanche-testnet
    84532,		// base-sepolia
    97,			// binance-testnet
    44787,		// celo-testnet
    338,		// cronos-testnet
    4002,		// fantom-testnet
    1452,		// gauss-testnet
    10200,		// gnosis-testnet
    1666700000,	// harmony-testnet
    599,		// metis-testnet
    65,			// okex-testnet
    11155420,	// optimism-sepolia
    80001,		// polygon-testnet
    1442,		// polygonzk-testnet
    943,		// pulse-testnet
    534351,     // scroll-testnet
    195,		// x1-testnet
];

const networks = [
    "arbitrum-sepolia",
    "avalanche-testnet",
    "base-sepolia",
    "binance-testnet",
    "celo-testnet",
    "cronos-testnet",
    "fantom-testnet",
    "gauss-testnet",
    "gnosis-testnet",
    "harmony-testnet",
    "metis-testnet",
    "okex-testnet",
    "optimism-sepolia",
    "polygon-testnet",
    "polygonzk-testnet",
    "pulse-testnet",
    "scroll-testnet",
    "x1-testnet",
];

const network = networks[Math.floor(Math.random()*networks.length)];
const chain = chains[Math.floor(Math.random()*chains.length)];
console.log('sending from',network,'to',chain);
exec("npx hardhat --network "+network+" cl-messagetest --chain "+chain, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});