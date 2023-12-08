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
				["0xa65F87B210A797af00E4A6D1BFd91F5644B87AC9", "0xe1683835E5eF56223aFb91A5026F381e9ca07383"],
				[1, 1],
				overrides
			);
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
