import Block from 'Block';

class Blockchain {
    constructor() {
        this.chain = [this.createStartingBlock()]
    }

    getBalanceOfAddress(addr) {
        let balance = 0;
        for (const block in this.chain) {
            for (const trans in this.chain.transactionData) {
                if(trans.toAddr === addr) {
                    balance += trans.amount;
                }
                if(trans.fromAddr === addr) {
                    balance -= trans.amount;
                }
            }
        }
        return balance;
    }
    createStartingBlock() {
        return new Block(0, '3/3/2018', "Starting Block", "0")
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
            if(this.chain[i].prevHash !== this.chain[i -1].prevHash()) {
                return false;
            }
        }
        return true;
    }
    addNode(newBlock) {
        // Check if blockchain is valid
        if(validateChain()) {
            // Get last node's hash and insert into the new block
        
            newBlock.prevHash = getLastNode().hash;

            // Push into the chain

            this.chain.push(newBlock);
            return true;
        }
        else {
            return false;
        }
        
    }
}