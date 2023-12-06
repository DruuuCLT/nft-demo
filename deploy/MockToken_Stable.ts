import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployer } = await hre.getNamedAccounts();
	const { deploy } = hre.deployments;

	await deploy(`MockToken_Stable`, {
		contract: "MockToken",
		from: deployer,
		args: ["tDAI", "tDAI"],
		log: true,
	});
};
export default func;
func.id = "deploy_mocktokenstable";
func.tags = ["MockToken_Stable"];
