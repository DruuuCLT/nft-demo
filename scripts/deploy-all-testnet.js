const { exec } = require("child_process");

function os_func() {
    this.execCommand = function (cmd) {
        return new Promise((resolve, reject)=> {
            exec(cmd, (error, stdout, stderr) => {
                if (error || stderr) {
                    console.log(error);
                    console.log(stderr);
                    resolve(false);
                    return;
                }
                resolve(stdout)
            });
       })
   }
}
var os = new os_func();

async function deploy() {
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

    for(let x=0; x < networks.length; x++) {
        console.log("RUNNING ON:", networks[x]);
        
        // while(true) {
        //     console.log("deploying MessageV3,MessageTest ..");
        //     const res = await os.execCommand("npx hardhat --network "+networks[x]+" deploy --tags MessageV3,MessageTest");
        //     console.log(res);
        //     if(res !== false) {
        //         console.log('deployed.');
        //         break;
        //     }
        // }

        // while(true) {
        //     console.log("setting up MessageV3 ..");
        //     const res = await os.execCommand("npx hardhat --network "+networks[x]+" cl-setup-all");
        //     console.log(res);
        //     if(res !== false) {
        //         console.log('setup.');
        //         break;
        //     }
        // }

        // UPDATE cl-messagetest-configure wiht proper addresses first!
        while(true) {
            console.log("setting up MessageTest ..");
            const res = await os.execCommand("npx hardhat --network "+networks[x]+" cl-messagetest-configure");
            console.log(res);
            if(res !== false) {
                console.log('setup.');
                break;
            }
        }
    }
}
deploy();