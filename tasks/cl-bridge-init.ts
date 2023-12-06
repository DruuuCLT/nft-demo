import { task } from "hardhat/config";
import addresses from "../addresses";

task("cl-init-bridge", "Initialize MessageV3")
	.addParam("weth", "WETH address")
	.addParam("stable", "Stable token address")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre:any) => {
		const ethers = hre.ethers;
		const network = hre.network.name;
		const [deployer] = await ethers.getSigners();
        
		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const messageV3 = await ethers.getContract("MessageV3");
		
		await(await messageV3.connect(signer).init(args.weth, args.stable, addresses[network].accountant)).wait();
	});
