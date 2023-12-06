harmony-testnet 1666700000-0000000
feetoken 0x40df78EF054B968477Bc09060FcB15A0f350c379
weth 0x448811d70486296d4e2B60E4258328957C94EaA7
nft 0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f

cronos-testnet 338-0000000
feetoken 0x40df78EF054B968477Bc09060FcB15A0f350c379
weth 0x448811d70486296d4e2b60e4258328957c94eaa7
nft 0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f

### Example usage

npx hardhat deploy --tags MockToken_Stable --network harmony-testnet
npx hardhat deploy --tags MockWETH --network harmony-testnet
npx hardhat deploy --tags SimpleNFT --network harmony-testnet

npx hardhat cl-weth --amount 10 --gas 1 --network harmony-testnet
npx hardhat cl-nft-init --gas 1 --network harmony-testnet
npx hardhat cl-nft-buy --gas 1 --network harmony-testnet

npx hardhat cl-nft-configure --gas 1 --network harmony-testnet

npx hardhat cl-nft-bridge --id 16667000000000000 --chain 338 --network harmony-testnet

---

npx hardhat deploy --tags MockToken_Stable --network cronos-testnet
npx hardhat deploy --tags MockWETH --network cronos-testnet
npx hardhat deploy --tags SimpleNFT --network cronos-testnet

npx hardhat cl-weth --amount 10 --network cronos-testnet
npx hardhat cl-nft-init --network cronos-testnet

npx hardhat cl-nft-configure --network cronos-testnet
