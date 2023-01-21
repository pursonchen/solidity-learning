// 从build中读取Spacebear类
const Spacebears = artifacts.require("Spacebears");

module.exports = function(deployer) {
    deployer.deploy(Spacebears);
}

