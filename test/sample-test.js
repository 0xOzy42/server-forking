const { expect } = require("chai");
const { ethers } = require("hardhat");
const TestHelper = require("./Helper");
const helper = new TestHelper();

describe("Sample Tests", function () {
  let greeter;
  let owner, user1, user2;
  let dai;
  before(async () => {
    await helper.deployContract();
    owner = helper.users.owner;
    user1 = helper.users.user1;
    user2 = helper.users.user2;
    greeter = helper.contracts.greeter;
    dai = helper.contracts.dai;
    const amount = helper.bigNumberFactory(100, 18);
    await dai.approve(greeter.address, amount);
    await dai.transfer(greeter.address, amount);
  });

  it("Check initial", async function () {
    const balance = await dai.balanceOf(greeter.address);
    console.log("Balance DAI contract: ", ethers.utils.formatEther(balance));
  });
});
