const Account = function(transactions = []) {
    this.transactions = transactions;
};
Account.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
};
Account.prototype.transactionsByMerchant = function(merchant) {
    let transactionsWithMerchant = [];
    for (var transaction of this.transactions) {
        if (transaction.merchant === merchant) {
            transactionsWithMerchant.push(transaction)
        };
    };
    return transactionsWithMerchant;
};
Account.prototype.transactionsByTag = function(tag) {
    let transactionsWithTag = [];
    for (var transaction of this.transactions) {
        if (transaction.merchant.tag === tag) {
            transactionsWithTag.push(transaction)
        };
    };
    return transactionsWithTag;
};
Account.prototype.transactionsByValueRange = function(min, max) {
    let transactionsInRange = [];
    for (var transaction of this.transactions) {
        if (transaction.amount >= min && transaction.amount <= max) {
            transactionsInRange.push(transaction);
        };
    };
    return transactionsInRange;
};
Account.prototype.transactionsThisMonth = function() {
    let transactionsThisMonth = [];
    for (var transaction of this.transactions) {
        if (transaction.timestamp.getMonth() === new Date().getMonth()) {
            transactionsThisMonth.push(transaction);
        };
    };
    return transactionsThisMonth;
};
module.exports = Account;
