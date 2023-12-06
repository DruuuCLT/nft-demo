task("cl-nft-configure", "")
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

		const contract = await ethers.getContract("SimpleNFT");

		const txOwner = await contract.connect(signer).owner();
		console.log(`Owner: ${txOwner}`);

		let overrides = {};
		if (args.gas) overrides = { gasLimit: GAS_LIMIT };

		// @note Free bridging [0, 0]
		const tx = await contract
			.connect(signer)
			.configureBridge(
				ethers.ZeroAddress,
				[ethers.parseUnits("1666700000", 0), ethers.parseUnits("338", 0)],
				[0, 0],
				["0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f", "0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f"],
				[1, 1],
				overrides
			);
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
