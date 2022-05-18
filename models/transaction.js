const Transaction = function(
    amount,
    year, month, day, hour, minute, second, millisecond = 0,
    merchant
) {
    this.amount = amount;
    this.timestamp = new Date(
        year, month, day, hour, minute, second, millisecond
    );
    this.merchant = merchant;
};
Transaction.prototype.gbpAmount = function() {
    return new Intl.NumberFormat(
        'en-GB',
        {currency: 'GBP', style: 'currency'},
    ).format(this.amount);
}
module.exports = Transaction;
