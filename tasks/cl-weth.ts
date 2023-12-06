task("cl-weth", "")
	.addParam("amount", "Amount in")
	// .addParam("contract", "Contract address")
	.addOptionalParam("gas", "Custom gas amount")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre) => {
		const ethers = hre.ethers;
		const network = hre.network.name;

		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const weth = await ethers.getContract("MockWETH");

		let overrides = { value: ethers.parseUnits(args.amount) };
		if (args.gas) overrides.gasLimit = parseInt(args.gas);

		console.log("Depositing ETH for WETH");
		const tx = await weth.connect(signer).deposit(overrides);
		const mined = await tx.wait();

		if (mined.confirmations > 0) {
			console.log("Tx mined");
			console.log("WETH Balance now");
			console.log(await weth.connect(signer).balanceOf(signer.address));
		}
	});
