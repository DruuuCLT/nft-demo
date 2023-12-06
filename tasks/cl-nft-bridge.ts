task("cl-nft-bridge", "")
	.addParam("id", "NFT Id to bridge")
	.addParam("chain", "Chain Id to bridge to")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const contract = await ethers.getContract("SimpleNFT");

		const approve = await contract.connect(signer).approve(contract.target, ethers.parseUnits(args.id, 0));
		const minedApprove = await approve.wait();
		if (minedApprove.confirmations > 0) console.log("Approved NFT");

		const tx = await contract.connect(signer).bridge(signer.address, ethers.parseUnits(args.chain, 0), ethers.parseUnits(args.id, 0));
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
