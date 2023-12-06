import { task } from "hardhat/config";
import { parseEther as eth } from "ethers";
import addresses from "../addresses";

// bugfix for metis + ethers6
const GAS_LIMIT = 0x100000;

task("cl-setup-all", "")
	.addOptionalParam("signer", "Custom signer (private key)")
	.addOptionalParam("provider", "Custom provider RPC url")
	.setAction(async (args, hre:any) => {
		const ethers = hre.ethers;
		const network = hre.network.name;
		const [deployer] = await ethers.getSigners();
        
		let signer = deployer;
		if (args.signer) signer = new ethers.Wallet(args.signer, new ethers.providers.JsonRpcProvider(args.provider));

		const messageV3 = await ethers.getContract("MessageV3");
		
		let aTeam:any;
		let operators:any;
		let supers: any;
		if(hre.network.live) {
			aTeam = [
				deployer.address
			];
			operators = [
				"",
				""
			];
			supers = [
				deployer.address
			];
		} else {
			aTeam = [
				deployer.address
			];
			operators = [
				"0x5347249370035555B6Fe2f4747EFE0E6d3AcA1aD",
				"0xf0abf2e881e475E1148b8b218C25A75124Af1609"
			];
			supers = [
				deployer.address
			];
		}

		for(let x=0; x < supers.length; x++) {
			if(await messageV3.bridgeSupers(supers[x]) == false) {
				console.log("Setting super:", supers[x]);
				await (await messageV3.setSuper(supers[x], true, { gasLimit: GAS_LIMIT })).wait();
			}
		}

		for(let x=0; x < operators.length; x++) {
			if(await messageV3.bridgeOperators(operators[x]) == false) {
				console.log("Setting operator:", operators[x]);
				await (await messageV3.setOperator(operators[x], true, { gasLimit: GAS_LIMIT })).wait();
			}
		}

		for(let x=0; x < aTeam.length; x++) {
			if(await messageV3.bridgeATeam(aTeam[x]) == false) {
				console.log("Setting ateam:", aTeam[x]);
				await (await messageV3.setATeam(aTeam[x], true, { gasLimit: GAS_LIMIT })).wait();
			}
		}

		if(await messageV3.INIT() == false) {
			if(hre.network.live) {
				if(!addresses[network].weth || !addresses[network].stable) {
					console.log('weth and stable addresses required on live network');
					return;
				}
				console.log("Setting weth/stable/accountant via init...");
				await(await messageV3.connect(signer).init(addresses[network].weth, addresses[network].stable, addresses.global.accountant, { gasLimit: GAS_LIMIT })).wait();
				console.log("Init complete.");
			} else {
				console.log("Setting weth/stable/accountant via init...");
				await(await messageV3.connect(signer).init(ethers.ZeroAddress, ethers.ZeroAddress, addresses.global.accountant, { gasLimit: GAS_LIMIT })).wait();
				console.log("Init complete.");
			}
		}

		// if testnet, turn off fees
		if(hre.network.live == false) {
			if(await messageV3.takeFeesOffline() == false) {
				console.log("Setting fees off for test network...");
				await(await messageV3.connect(signer).setTakeFeesOffline(true, { gasLimit: GAS_LIMIT }));
				console.log("Fees set to offline.");
			}
		}

		console.log("Setting the bridge chain statuses...");
		let chains:any = [];
		let status:any = [];
		let express:any = [];
		if (hre.network.live) {
			console.log("Configuring for LIVE networks");
			chains = [];
			status = [];
			express = [];
		} else {
			console.log("Configuring for TEST networks");
			chains = [
				421614,		// arbitrum-sepolia
				43113,		// avalanche-testnet
				84532,		// base-sepolia
				97,			// binance-testnet
				44787,		// celo-testnet
				338,		// cronos-testnet
				4002,		// fantom-testnet
				1452,		// gauss-testnet
				10200,		// gnosis-testnet
				1666700000,	// harmony-testnet
				599,		// metis-testnet
				65,			// okex-testnet
				11155420,	// optimism-sepolia
				80001,		// polygon-testnet
				1442,		// polygonzk-testnet
				943,		// pulse-testnet
				534351,		// scroll-testnet
				195,		// x1-testnet
			];

			for(let x=0; x < chains.length; x++) status.push(true);
			for(let x=0; x < chains.length; x++) express.push(eth("1"));
		}

		await (await messageV3.setChainStatus(chains, status, express, { gasLimit: GAS_LIMIT })).wait();
		console.log("Chain statuses set address set!");

		if(await messageV3.bridgeEnabled() == false) {
			console.log("Setting bridge status to enabled");
			await(await messageV3.connect(signer).setBridgeStatus(true, { gasLimit: GAS_LIMIT })).wait();
		}
	});
