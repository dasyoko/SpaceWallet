var Block = require("./Block.js");
var Transaction = require("./Transaction.js");


module.exports = class Blockchain {
    constructor() {
        this.chain = [this.createStartingBlock()]
    }

    getBalanceOfAddress(addr) {
        let balance = 0;
        
        for (const block in this.chain) {
            var trans = this.chain[block].transactionData;
            if(trans.toAddr === addr) {
                balance += trans.amount;
            }
            if(trans.fromAddr === addr) {
                balance -= trans.amount;
            }
        }
        return balance;
    }
    createStartingBlock() {
        return new Block(0, '3/3/2018', new Transaction(0,0,0, 'Person'), "0")
    }
    getLastNode() {
        return this.chain[this.chain.length -1]
    }
    validateChain() {
        // Check every node in the chain
        for(var i = 1; i < this.chain.length; i++) {
            if(this.chain[i].hash !== this.chain[i].calculateHash()) {
                return false;
            }
            if(this.chain[i].prevHash !== this.chain[i -1].prevHash) {
                return false;
            }
        }
        return true;
    }
    addNode(newBlock) {
        // Check if blockchain is valid
        //if(this.validateChain()) {
            // Get last node's hash and insert into the new block
        
            newBlock.prevHash = this.getLastNode().hash;

            // Push into the chain

            this.chain.push(newBlock);
            return true;
        /*}
        else {
            console.log("its failing");
            return false;
        }*/
    }

    getChain(){
        return this.chain;
    }

    getChainLength(){
        return this.chain.length;
    }
}