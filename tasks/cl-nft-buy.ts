task("cl-nft-buy", "")
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

		const buyToken = await ethers.getContract("MockToken_Stable");
		const contract = await ethers.getContract("SimpleNFT");

		let overrides = {};
		if (args.gas) overrides = { gasLimit: GAS_LIMIT };

		const approve = await buyToken.connect(signer).approve(contract.target, ethers.MaxUint256, overrides);
		const minedApprove = await approve.wait();
		if (minedApprove.confirmations > 0) console.log("Approved tokens");

		const tx = await contract.connect(signer).mint(overrides);
		const mined = await tx.wait();

		if (mined.confirmations > 0) console.log("Tx mined");
	});
