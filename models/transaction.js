const Transaction = function(amount, date, merchant) {
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
};
Transaction.prototype.gbpAmount = function() {
    return new Intl.NumberFormat(
        'en-GB',
        {currency: 'GBP', style: 'currency'},
    ).format(this.amount);
}
module.exports = Transaction;
