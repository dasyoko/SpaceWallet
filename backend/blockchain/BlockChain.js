import Block from 'Block';

class Blockchain {
    constructor() {
        this.chain = [this.createStartingBlock()]
    }
    createStartingBlock() {
        return new Block(0, '3/3/2018', null, "0")
    }
    getLastNode() {
        return this.chain[this.chain.length -1]
    }
    validateNode() {
        // Check every node in the chain
    }
    addNode(newBlock) {
        // add New block to the chain
    }
}