import { task } from "hardhat/config";

// bugfix for metis + ethers6
const GAS_LIMIT = 0x100000;

task("cl-messagetest", "")
	.addParam("chain", "Destination chain id")
	.addOptionalParam("confirmations", "How many")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre:any) => {
		const ethers = hre.ethers;
		const [deployer] = await ethers.getSigners();

		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));
		
		console.log("Sending a message...");

		const contract = await ethers.getContract("MessageTest");
		const confirms = args?.confirmations ? parseInt(args.confirmations) : 6;
		const tx = await contract.connect(signer).sendMessage(parseInt(args.chain), confirms, { gasLimit: GAS_LIMIT });
		console.log(`Tx ID ${tx.hash}`);
		const mined = await tx.wait();		
		if (mined.confirmations > 0) console.log("Tx sent!");
	});
