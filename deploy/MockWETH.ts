import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    if(hre.network.live) return false;

    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    await deploy("MockWETH", {
        from: deployer,
        args: [],
        log: true,
    });

    return hre.network.live;
};
export default func;
func.id = "deploy_mock_weth";
func.tags = ["MockWETH"];
