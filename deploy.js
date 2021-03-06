const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("Web3");
const { interface, bytecode } = require("./compile");
const dotenv = require("dotenv").config();

const provider = new HDWalletProvider(
  process.env.METAMASK_MNEMONIC,
  process.env.RINKEBY_INFURA_API_KEY
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from accounts", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ GAS: "1000000", from: accounts[0] });
  console.log("contract deployed to", result.options.address);
};

deploy();
