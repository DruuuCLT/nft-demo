task("cl-nft-buy", "")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const buyToken = await ethers.getContract("MockToken_Stable");
		const contract = await ethers.getContract("SimpleNFT");

		const approve = await buyToken.connect(signer).approve(contract.target, ethers.MaxUint256);
		const minedApprove = await approve.wait();
		if (minedApprove.confirmations > 0) console.log("Approved tokens");

		const tx = await contract.connect(signer).mint();
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
