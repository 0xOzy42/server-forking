const { expect } = require("chai");
const { ethers } = require("hardhat");
const TestHelper = require("./Helper");
const helper = new TestHelper();

describe("Sample Tests", function () {
  let greeter;
  let owner, user1, user2;
  let weth, dai;
  before(async () => {
    await helper.deployContract();
    owner = helper.users.owner;
    user1 = helper.users.user1;
    user2 = helper.users.user2;
    greeter = helper.contracts.greeter;
    dai = helper.contracts.dai;
    weth = helper.contracts.weth;
    // const amount = helper.bigNumberFactory(100, 18);
  });

  it("Check initial", async function () {
    const balance = await weth.balanceOf(owner.address);
    console.log("Balance WETH Owner: ", ethers.utils.formatEther(balance));
  });
});
