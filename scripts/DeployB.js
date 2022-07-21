const hre = require("hardhat");

const main = async () => {
  const BFactory = await hre.ethers.getContractFactory("B");
  const B = await BFactory.deploy();
  await B.deployed();

  console.log("B deployed at : ", B.address);

  let holders = await B.returnTokenHolders();
  console.log(holders);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
