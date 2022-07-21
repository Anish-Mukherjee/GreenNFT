//SPDX-License-Identifier:UNLICENSED

pragma solidity ^0.8.7;

import "./GreenNFT.sol";

contract B {
    GreenNFT contr = GreenNFT(0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9); //address of GreenNFT
    address[] tokenHolders = contr.getTokenHolders();

    function returnTokenHolders() public view returns (address[] memory) {
        return tokenHolders;
    }
}
