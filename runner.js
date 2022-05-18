const Tag = require('./models/tag');
const Merchant = require('./models/merchant');
const Transaction = require('./models/transaction');
const Account = require('./models/account');

const groceries = new Tag('groceries', 200);
const asda = new Merchant('Asda', groceries);
const buyMilk = new Transaction(
    2,
    new Date(2022, 4, 16),
    asda
);
const mainAccount = new Account();
mainAccount.addTransaction(buyMilk);
console.log(mainAccount.transactions[0].gbpAmount());

