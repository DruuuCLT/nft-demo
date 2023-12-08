task("cl-nft-balance", "")
	.addOptionalParam("gas", "Custom gas amount")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const GAS_LIMIT = 0x100000;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const weth = await ethers.getContract("MockWETH");
		const buyToken = await ethers.getContract("MockToken_Stable");
		const nft = await ethers.getContract("SimpleNFT");

		let overrides = {};
		if (args.gas) overrides = { gasLimit: GAS_LIMIT };

		let balance = await weth.connect(signer).balanceOf(nft.target, overrides);
		console.log(`WETH Balance of the contract ${balance}`);

		balance = await buyToken.connect(signer).balanceOf(nft.target, overrides);
		console.log(`BuyToken Balance of the contract ${balance}`);
	});
