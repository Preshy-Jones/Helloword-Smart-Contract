const path = require("path");
const fs = require("fs");
const solc = require("solc");

const helloPath = path.resolve(__dirname, "contracts", "HelloWorld.sol");
const source = fs.readFileSync(helloPath, "utf8");

//console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[":Inbox"];
