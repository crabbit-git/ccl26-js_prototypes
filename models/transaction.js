const Transaction = function(amount, date, merchant) {
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
};
module.exports = Transaction;
