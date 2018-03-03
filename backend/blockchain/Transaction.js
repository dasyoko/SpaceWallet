module.exports = class Transaction {
    constructor(fromAddr, toAddr, amount) {
        this.fromAddr = fromAddr;
        this.toAddr = toAddr
        this.amount = amount;
    }
}
