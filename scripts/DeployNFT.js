const hre = require("hardhat");

const main = async () => {
  const NFTFactory = await hre.ethers.getContractFactory("GreenNFT");
  const [owner, addr1, addr2, addr3] = await hre.ethers.getSigners();
  const NFT = await NFTFactory.deploy();
  await NFT.deployed();

  console.log("Contract deployed at address : ", NFT.address);

  console.log("Minting NFT......");
  await NFT.safeMint(addr1.address);
  console.log("NFT minted!");

  const tokenUri = await NFT.tokenURI(0);
  console.log("The URI of the minted token is ", tokenUri);

  /*let tokenHolders = await NFT.getTokenHolders();
  console.log(tokenHolders);*/
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
