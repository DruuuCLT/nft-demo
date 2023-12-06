import { task } from "hardhat/config";

// bugfix for metis + ethers6
const GAS_LIMIT = 0x100000;

task("cl-messagetest-configure", "")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre:any) => {
		const ethers = hre.ethers;
		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));
		
		console.log("Configuring messagetest");

		let chains:any;
		let addresses:any;
		if (hre.network.live) {
			console.log("Configuring for LIVE networks");
			chains = [250, 56, 137, 43114, 1088, 25, 42220, 42262, 1666600000, 8453, 369, 1, 1777];
			addresses = [
				""
			];
		} else {
			console.log("Configuring for TEST networks");
			chains = [
				421614, // arbitrum-sepolia
				43113, // avalanche-testnet
				84532, // base-sepolia
				97, // binance-testnet
				44787, // celo-testnet
				338, // cronos-testnet
				4002, // fantom-testnet
				1452, // gauss-testnet
				10200, // gnosis-testnet
				1666700000, // harmony-testnet
				599, // metis-testnet
				65, // okex-testnet
				11155420, // optimism-sepolia
				80001, // polygon-testnet
				1442, // polygonzk-testnet
				943, // pulse-testnet
				534351, // scroll-testnet
				195, // x1-testnet
			];

			addresses = [
				"0x6f5BDA2329dC2b1A0431486D98C97610A7E90063", // arbitrum-sepolia
				"0xd72F37d7315Ed8B157628470ae71c6Be89dF9398", // avalanche-testnet
				"0xd04CfEC7ff7EdBC09BB3461Ea95C7ECBCfC61bd5", // base-sepolia
				"0xfBa8f7A335c4bBe686fac8556213f6EDE2F332bF", // binance-testnet
				"0x9DE26deF850C5D4A3AfD43816c69f60d057C7Ff4", // celo-testnet
				"0xCb69924aDf996315aDcd9051ccE2B572dD9450a9", // cronos-testnet
				"0xB994C51a5119674f1492e0C757fB4f3Ee81a7ac2", // fantom-testnet
				"0xdFE95DFc541fd7AEa1E4B1Dc64f67D1F3572A4c8", // gauss-testnet
				"0x3413714B95c7A087517B7a8a791627F5a91A7712", // gnosis-testnet
				"0xdFE95DFc541fd7AEa1E4B1Dc64f67D1F3572A4c8", // harmony-testnet
				"0x9D7397c36CaAA827D4Fece23b9D3bA8f6fb3f07A", // metis-testnet
				"0x4B5b1163525A6Cebd9a06F4C386976F2B41A4Bdf", // okex-testnet
				"0x9DE26deF850C5D4A3AfD43816c69f60d057C7Ff4", // optimism-sepolia
				"0x558c52b67594faf5Fdb0cAACAa906d05Ae1F3c4F", // polygon-testnet
				"0x9D7397c36CaAA827D4Fece23b9D3bA8f6fb3f07A", // polygonzk-testnet
				"0x6c884e8b8139a87A68b7c4350a9a25305f6de0b6", // pulse-testnet
				"0x4B5b1163525A6Cebd9a06F4C386976F2B41A4Bdf", // scroll-testnet
				"0x9D7397c36CaAA827D4Fece23b9D3bA8f6fb3f07A", // x1-testnet
			];
		}

		const messageV3 = await ethers.getContract("MessageV3");
		const messageTest = await ethers.getContract("MessageTest");
		await (await messageTest.configure(messageV3.target, chains, addresses, { gasLimit: GAS_LIMIT })).wait();
		
		console.log("Chain statuses set address set!");

	});
