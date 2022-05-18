const Account = function(transactions = []) {
    this.transactions = transactions;
};
Account.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
};
module.exports = Account;
