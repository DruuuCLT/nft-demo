import { task } from "hardhat/config";
import { parseEther as eth } from "ethers";

task("cl-set-chain-status", "").setAction(async (args, hre: any) => {
	const ethers = hre.ethers;
	const [deployer] = await ethers.getSigners();

	let signer = deployer;
	if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

	console.log("Setting the bridge chain statuses...");

	let chains:any;
	let status:any;
	let express:any;
	if (hre.network.live) {
		console.log("Configuring for LIVE networks");
		chains = [250, 56, 137, 43114, 1088, 25, 42220, 42262, 1666600000, 8453, 369, 1, 1777];
		status = [true, true, true, true, true, true, true, true, true, true, true, true, true];
		express = [eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("1"), eth("5"), eth("1")];
	} else {
		console.log("Configuring for TEST networks");
		chains = [97, 4002, 1452, 43113, 80001];
		status = [true, true, true, true, true];
		express = [eth("1"),eth("1"),eth("1"),eth("1"),eth("1")];
	}

	const messageV3 = await ethers.getContract("MessageV3");
	await (await messageV3.setChainStatus(chains, status, express)).wait();
	console.log("Chain statuses set address set!");
});
