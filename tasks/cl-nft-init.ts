task("cl-nft-init", "")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const contract = await ethers.getContract("SimpleNFT");

		const tx = await contract.connect(signer).init();
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
