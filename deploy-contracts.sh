#!/bin/sh
export ANVIL_DEFAULT_PK=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
cd token-delegation
forge create --rpc-url http://127.0.0.1:8545 --private-key ${ANVIL_DEFAULT_PK} src/DelegationRegistry.sol:DelegationRegistry
cd ..
