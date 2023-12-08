task("cl-nft-send-tokens", "")
	.addParam("amount", "Amount in")
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

		// let approve = await weth.connect(signer).approve(nft.target, ethers.MaxUint256, overrides);
		// let minedApprove = await approve.wait();
		// if (minedApprove.confirmations > 0) console.log("Approved tokens");

		// // function transfer(address _to, uint256 _value) public returns (bool success)
		// approve = await buyToken.connect(signer).approve(nft.target, ethers.MaxUint256, overrides);
		// minedApprove = await approve.wait();
		// if (minedApprove.confirmations > 0) console.log("Approved tokens");

		// await (await weth.connect(signer).transfer(nft.target, ethers.parseUnits(args.amount, 18), overrides)).wait();
		await (await buyToken.connect(signer).transfer(nft.target, ethers.parseUnits(args.amount, 18), overrides)).wait();
	});
