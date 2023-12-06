var fs = require('fs');
var path = process.cwd();

async function main() {
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

    let addresses = [];
    let chainids = [];
    for(let x=0; x < networks.length; x++) {
        const messageTest = require(process.cwd()+"/deployments/"+networks[x]+"/MessageTest.json");
        const chainId = fs.readFileSync(process.cwd()+"/deployments/"+networks[x]+"/.chainId").toString();
        addresses.push(messageTest.address);
        chainids.push(chainId);
    }

    console.log("\n\n");
    for(let x=0; x < networks.length; x++) {
        console.log(chainids[x]+", // "+networks[x]);
    }

    console.log("\n\n");
    for(let x=0; x < networks.length; x++) {
        console.log('"'+addresses[x]+'", // '+networks[x]);
    }

    console.log("\n\n");
}
main();