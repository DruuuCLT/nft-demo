avalanche-testnet 431130000000
feetoken 0x448811d70486296d4e2B60E4258328957C94EaA7
weth 0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f
nft 0x02996C46c6c0a8C5450d0C497597074e86480126

optimism-sepolia 11155420-0000000
feetoken 0x40df78EF054B968477Bc09060FcB15A0f350c379
weth 0x448811d70486296d4e2B60E4258328957C94EaA7
nft 0xF866EbF78739083d0312b1A7db150F3954aa2eb1

### Example usage

npx hardhat deploy --tags MockToken_Stable --network optimism-sepolia
npx hardhat deploy --tags MockWETH --network optimism-sepolia
npx hardhat deploy --tags SimpleNFT --network optimism-sepolia

npx hardhat cl-weth --amount 0.1 --network avalanche-testnet
npx hardhat cl-nft-init --network avalanche-testnet
npx hardhat cl-nft-buy --network avalanche-testnet
npx hardhat cl-nft-configure --network avalanche-testnet
npx hardhat cl-nft-bridge --id 431130000000 --chain 11155420 --network avalanche-testnet
