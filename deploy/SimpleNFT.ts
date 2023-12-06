import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: any) {
	const { deployer } = await hre.getNamedAccounts();
	const { deploy } = hre.deployments;

	const buyToken = (await deployments.get("MockToken_Stable")).address;

	await deploy("SimpleNFT", {
		from: deployer,
		args: [buyToken],
		log: true,
	});

	return hre.network.live;
};

export default func;
func.id = "deploy_simple_nft";
func.tags = ["SimpleNFT"];
func.dependencies = [];
