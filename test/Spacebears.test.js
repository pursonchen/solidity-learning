const Spacebears = artifacts.require("Spacebears");
const truffleAssert = require("truffle-assertions");

contract("Spacebears", (accounts) => {
    it('should credit an NFT to a specific account',async() => {
        const spacebearInstance = await Spacebears.deployed();
        // await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        // assert.equal(
        //   await spacebearInstance.ownerOf(0),
        //   accounts[1],
        //   "Owner of Token is the wrong address"
        // );


        let txResult = await spacebearInstance.safeMint(
          accounts[1],
          "spacebear_1.json"
        );

        // assert.equal(
        //   txResult.logs[0].event,
        //   "Transfer",
        //   "Transfer event was not emitted"
        // );
        // assert.equal(
        //   txResult.logs[0].args.from,
        //   "0x0000000000000000000000000000000000000000",
        //   "Token was not transferred from the zero address"
        // );
        // assert.equal(
        //   txResult.logs[0].args.to,
        //   accounts[1],
        //   "Receiver wrong address"
        // );
        // assert.equal(
        //   txResult.logs[0].args.tokenId.toString(),
        //   "0",
        //   "Wrong Token ID minted"
        // );

         truffleAssert.eventEmitted(txResult, "Transfer", {
           from: "0x0000000000000000000000000000000000000000",
           to: accounts[1],
           tokenId: web3.utils.toBN("0"),
         });

        
    })
})