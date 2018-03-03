const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, time, transactionData, prevHash='') {
        this.index = index;
        this.prevHash = prevHash;
        this.time = time;
        this.transactionData = transactionData;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.prevHash + this.time + JSON.stringify(this.transactionData)).toString();
    }
}

export default Block;