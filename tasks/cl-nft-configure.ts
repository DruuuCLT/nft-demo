task("cl-nft-configure", "")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const contract = await ethers.getContract("SimpleNFT");

		const txOwner = await contract.connect(signer).owner();
		console.log(`Owner: ${txOwner}`);

		// @note Free bridging [0, 0]
		const tx = await contract
			.connect(signer)
			.configureBridge(
				ethers.ZeroAddress,
				[ethers.parseUnits("43113", 0), ethers.parseUnits("11155420", 0)],
				[0, 0],
				["0x02996C46c6c0a8C5450d0C497597074e86480126", "0xF866EbF78739083d0312b1A7db150F3954aa2eb1"],
				[1, 1]
			);
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
