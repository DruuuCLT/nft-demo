import { task } from "hardhat/config";

task("cl-set-take-fees-offline", "")
	.addParam("status", "True or false")
	.setAction(async (args, hre:any) => {
		const ethers = hre.ethers;
		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		console.log("Setting bridge fees offline status...");

		let status = true;
		if (args.status) status = args.status.toLowerCase() == "true" ? true : false;

		const messageV3 = await ethers.getContract("MessageV3");
		await(await messageV3.connect(signer).setTakeFeesOffline(status)).wait();
		console.log("Bridge fee offline status set!");
	});
