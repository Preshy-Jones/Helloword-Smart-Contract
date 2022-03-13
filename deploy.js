const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("Web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "mad similar opinion agree parrot size return chair sign sustain million view",
  "https://rinkeby.infura.io/v3/64c90deaa0ca4197b80a64b5140898fe"
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
