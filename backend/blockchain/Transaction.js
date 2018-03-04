module.exports = class Transaction {
    constructor(fromAddr, toAddr, amount, type) {
        this.fromAddr = fromAddr;
        this.toAddr = toAddr
        this.amount = amount;
        this.type = type;
    }
}
