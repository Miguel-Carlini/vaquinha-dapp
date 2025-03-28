require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    //sepolia: {
    //  url: "https://eth-sepolia.g.alchemy.com/v2/QALcFc__ihhGvbY54-KkQwUZF2EF-JHO",
    //  accounts: ["3ea748a82f67876d95c289347e0aa9b8e010ae51e40843c3acfb48526d0bdfc3"],
    //},
    localhost: {
      url: "http://127.0.0.1:8545", // Hardhat node local
    },
  },
};
