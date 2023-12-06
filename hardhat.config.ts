// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-ethers";
// import "hardhat-deploy";
// import "hardhat-gas-reporter";
// import "@typechain/hardhat";
// import "solidity-coverage";
// import "hardhat-deploy-tenderly";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import "./tasks/cl-set-operator";
import "./tasks/cl-bridge-init";
import "./tasks/cl-messagetest";
import "./tasks/cl-messagetest-configure";
import "./tasks/cl-set-ateam";
import "./tasks/cl-set-bridge-status";
import "./tasks/cl-set-chain-status";
import "./tasks/cl-set-operator";
import "./tasks/cl-set-super";
import "./tasks/cl-set-take-fees-offline";
import "./tasks/cl-setup-all";
import "./tasks/cl-weth";
import "./tasks/cl-nft-init";
import "./tasks/cl-nft-buy";
import "./tasks/cl-nft-bridge";
import "./tasks/cl-nft-configure";

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const accounts = [
	process.env.PRIVATE_KEY || "0xa8b700b331ea6e4859843cca6a005577448775a1b9e049dc387a061d6db6ded7",
	"0xcd8cc7d8854e27234a50d1d372de92c612c17a0129923bfbbea0e94017f37fbb",
	"0x06b7ee5e6e301419e8eec0dd92f90bbac64ee6f1db77c93303ef55f69375692b",
	"0x55910bef9a4bb92744801f9d6ea01dcf652c10f3b571ac68e6d45094c2df213e",
	"0x02b3c7996b779fea5807288aa421576cf7982808ee6e648691c6e3686d5b6c1d",
	"0x7d28ecd36e86e9b3d9a6567d7ef91a14c5beb0afbd82bc4836bc92b8262c5625",
	"0x9c22e908420616fbb6b2ad6fd7f15542a83e01c32daa7d0ebf347a2ea8a162e6",
	"0x718b1ad81ce05a22ec5ecd9776ee2285d58e394bae58d321c9fb5ca2d2dda922",
	"0xf1e8602cc4c5dad25abb09f9ca9598484893b2dc3150c5fbc100ae0a4f45f6c2",
	"0x5c7f8cfc9cbc8fce2ec91cc24b1c0dce3fcf28043bb42e7fa74d86b70c522470",
	"0x5a56556177aea615273303e2571141775707cb05cbc81a56fecf36b81d2a192f",
	"0xe14ed48b7e8ad24a2eef5cd44d6a14084b97d863ee6698593d33ec28d6e923b2",
	"0x8c138651817f50e92f6bf76fdbce9156a2891e6278087a085c0cbd3c60a3a921",
	"0xe3c6dcc706c8550dd335a4775043b12d6c95cbad2733cddaea389ada7e5ef4ce",
	"0x5828eeb1b50b6c2feaa97b9bd549707df7f67e535c2f467a93714537d6787e1c",
	"0x5777aff754a3b252aed056d48984e710a3a2edb7916473b812604ceef0f0f6c6",
	"0x8921549702e33672bf5ab068804f232a2fa2afbb91177d75352a253c4ce8f56b",
	"0x99327aa3169f919143aa0ee2c01a04d6ae3869855d65b422200378d0c0c7bf1c",
	"0x94ef63ee9cdbd1c6be3426ed709cb974d1641a0a179503a118ad621cf1672028",
];

const config: HardhatUserConfig = {
	gasReporter: {
		enabled: true,
		token: "ETH",
		coinmarketcap: process.env.CMC_API_KEY || "",
		//gasPriceApi: "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice"
		//gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice"
		//gasPriceApi: "https://api.snowtrace.io/api?module=proxy&action=eth_gasPrice"
		//gasPriceApi: "https://api.ftmscan.com/api?module=proxy&action=eth_gasPrice"
	},
	networks: {
		"x1-testnet": {
			chainId: 195,
			url: "https://testrpc.x1.tech/",
			live: false,
			accounts: accounts,
		},
		"arbitrum-sepolia": {
			chainId: 421614,
			url: "https://sepolia-rollup.arbitrum.io/rpc",
			live: false,
			accounts: accounts,
		},
		"optimism-sepolia": {
			chainId: 11155420,
			url: "https://sepolia.optimism.io",
			live: false,
			accounts: accounts,
		},
		"fantom-testnet": {
			chainId: 4002,
			url: "https://rpc.testnet.fantom.network",
			live: false,
			accounts: accounts,
		},
		"avalanche-testnet": {
			url: "https://api.avax-test.network/ext/bc/C/rpc",
			live: false,
			accounts: accounts,
		},
		"binance-testnet": {
			url: "https://data-seed-prebsc-2-s1.binance.org:8545",
			live: false,
			accounts: accounts,
		},
		"celo-testnet": {
			url: "https://alfajores-forno.celo-testnet.org",
			live: false,
			accounts: accounts,
		},
		"cronos-testnet": {
			url: "https://evm-t3.cronos.org/",
			live: false,
			accounts: accounts,
		},
		"metis-testnet": {
			url: "https://goerli.gateway.metisdevops.link/",
			live: false,
			accounts: accounts,
		},
		"harmony-testnet": {
			url: "https://api.s0.b.hmny.io/",
			live: false,
			accounts: accounts,
		},
		"polygon-testnet": {
			url: "https://rpc-mumbai.maticvigil.com/",
			live: false,
			accounts: accounts,
		},
		"polygonzk-testnet": {
			url: "https://rpc.public.zkevm-test.net",
			live: false,
			accounts: accounts,
		},
		"gauss-testnet": {
			url: "https://rpc.giltestnet.com",
			live: false,
			accounts: accounts,
		},

		"pulse-testnet": {
			chainId: 943,
			url: "https://rpc.v4.testnet.pulsechain.com",
			live: false,
			accounts: accounts,
		},
		"okex-testnet": {
			chainId: 65,
			url: "https://exchaintestrpc.okex.org",
			live: false,
			accounts: accounts,
		},
		"base-sepolia": {
			chainId: 84532,
			url: "https://sepolia.base.org",
			live: false,
			accounts: accounts,
		},
		"scroll-testnet": {
			chainId: 534351,
			url: "https://sepolia-rpc.scroll.io",
			live: false,
			accounts: accounts,
		},
		"gnosis-testnet": {
			// ?
			chainId: 10200,
			url: "https://rpc.chiadochain.net",
			live: false,
			accounts: accounts,
		},

		"zksync-testnet": {
			// ? ProviderError: Failed to serialize transaction: toAddressIsNull
			chainId: 280,
			url: "https://testnet.era.zksync.dev",
			live: false,
			accounts: accounts,
		},
		"horizen-testnet": {
			// ? ProviderError: Internal error
			chainId: 1663,
			url: "https://gobi-rpc.horizenlabs.io/ethv1",
			live: false,
			accounts: accounts,
		},
		"xdc-testnet": {
			// ? Error: missing from address
			chainId: 51,
			url: "https://rpc.apothem.network/",
			live: false,
			accounts: accounts,
		},

		"arbitrum-goerli": {
			// old
			chainId: 421613,
			url: "https://goerli-rollup.arbitrum.io/rpc",
			live: false,
			accounts: accounts,
		},

		ethereum: {
			url: "https://ethereum.publicnode.com",
			live: true,
			accounts: accounts,
		},
		arbitrum: {
			url: "https://arbitrum-one.public.blastapi.io",
			live: true,
			accounts: accounts,
		},
		dogechain: {
			url: "https://rpc.ankr.com/dogechain",
			live: true,
			accounts: accounts,
		},
		fantom: {
			url: "https://rpc.ankr.com/fantom",
			live: true,
			accounts: accounts,
		},
		polygon: {
			url: "https://polygon-rpc.com",
			live: true,
			accounts: accounts,
		},
		celo: {
			url: "https://rpc.ankr.com/celo",
			live: true,
			accounts: accounts,
		},
		binance: {
			url: "https://bsc-dataseed.binance.org",
			live: true,
			accounts: accounts,
		},
		avalanche: {
			url: "https://api.avax.network/ext/bc/C/rpc",
			live: true,
			accounts: accounts,
		},
		harmony: {
			url: "https://a.api.s0.t.hmny.io",
			live: true,
			accounts: accounts,
		},
		oasis: {
			url: "https://emerald.oasis.dev",
			live: true,
			accounts: accounts,
		},
		metis: {
			url: "https://andromeda.metis.io/?owner=1088",
			live: true,
			accounts: accounts,
		},
		cronos: {
			url: "https://cronos.blockpi.network/v1/rpc/public",
			live: true,
			accounts: accounts,
		},
		optimism: {
			url: "https://rpc.ankr.com/optimism",
			live: true,
			accounts: accounts,
		},
		base: {
			url: "https://base.blockpi.network/v1/rpc/public",
			live: true,
			accounts: accounts,
		},
		pulse: {
			url: "https://rpc.pulsechain.com/",
			live: true,
			accounts: accounts,
		},
		gauss: {
			chainId: 1777,
			url: "https://rpc.gaussgang.com/",
			live: true,
			accounts: accounts,
		},
		// @note This MUST be hardhat, not localhost the docs are ambigious
		hardhat: {
			live: false,
			deploy: ["deploy/hardhat/"],
		},
	},
	namedAccounts: {
		deployer: 0,
		accountant: 1,
	},
	solidity: {
		compilers: [
			{
				version: "0.8.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
						/*details: {
							yul: true,
							yulDetails: {
								optimizerSteps: "u",
							},
						},*/
					},

					//viaIR: true,
				},
			},
			{
				version: "0.5.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
		],
	},
};

export default config;
