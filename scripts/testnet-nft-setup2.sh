#!/bin/bash

if [ "$#" -lt 3 ]; then
  echo "Usage: $0 chainName tokenAddr wethAddr gasMode"
  exit 1
fi

# Assign parameters to variables
chain="$1"
token="$2"
weth="$3"
gas="$4"

if [ -n "$gas" ]; then
  echo "Configuring NFT contract"
  npx hardhat cl-nft-configure --gas 1 --network "$chain"
  echo "Sendign tokens to the contract"
  npx hardhat cl-nft-send-tokens --amount 10 --gas 1 --network "$chain"
#   echo "Setting bridge status"
#   npx hardhat cl-set-bridge-status --status true --gas 1 --network "$chain"
  echo "Setting fee token"
  npx hardhat cl-set-fee-token --token "$token" --gas 1 --network "$chain"
  echo "Setting weth"
  npx hardhat cl-set-weth --token "$weth" --gas 1 --network "$chain"
  echo "Setting fee amount"
  npx hardhat cl-set-min-fee --fee 10 --gas 1 --network "$chain"
  echo "Setting the contract to take fees"
  npx hardhat cl-set-take-fees-offline --status false --gas 1 --network "$chain"
else
  echo "Configuring NFT contract"
  npx hardhat cl-nft-configure --network "$chain"
  echo "Sendign tokens to the contract"
  npx hardhat cl-nft-send-tokens --amount 10 --network "$chain"
#   echo "Setting bridge status"
#   npx hardhat cl-set-bridge-status --status true --network "$chain"
  echo "Setting fee token"
  npx hardhat cl-set-fee-token --token "$token" --network "$chain"
  echo "Setting weth"
  npx hardhat cl-set-weth --token "$weth" --network "$chain"
  echo "Setting fee amount"
  npx hardhat cl-set-min-fee --fee 10 --network "$chain"
  echo "Setting the contract to take fees"
  npx hardhat cl-set-take-fees-offline --status false --network "$chain"
fi