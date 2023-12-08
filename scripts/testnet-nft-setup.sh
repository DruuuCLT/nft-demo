#!/bin/bash

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 chainName gasMode"
  exit 1
fi

# Assign parameters to variables
chain="$1"
gas="$2"

npx hardhat deploy --tags SimpleNFT --network "$chain"

if [ -n "$gas" ]; then
  echo "Running INIT on the nft contract"
  npx hardhat cl-nft-init --gas 1 --network "$chain"
  echo "Buying an NFT"
  npx hardhat cl-nft-buy --gas 1 --network "$chain"
else
  echo "Running INIT on the nft contract"
  npx hardhat cl-nft-init --network "$chain"
  echo "Buying an NFT"
  npx hardhat cl-nft-buy --network "$chain"
fi

# npx hardhat cl-weth --amount 10 --gas 1 --network harmony-testnet
# 
# 

# npx hardhat cl-nft-configure --gas 1 --network harmony-testnet
# command1 "$param1" "$param2"