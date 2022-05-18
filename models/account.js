const Account = function(transactions = []) {
    this.transactions = transactions;
};
Account.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
};
Account.prototype.transactionsByMerchant = function(merchant) {
    transactionsWithMerchant = [];
    for (var transaction of this.transactions) {
        if (transaction.merchant === merchant) {
            transactionsWithMerchant.push(transaction)
        };
    };
    return transactionsWithMerchant;
};
Account.prototype.transactionsByTag = function(tag) {
    transactionsWithTag = [];
    for (var transaction of this.transactions) {
        if (transaction.merchant.tag === tag) {
            transactionsWithTag.push(transaction)
        };
    };
    return transactionsWithTag;
};
module.exports = Account;
