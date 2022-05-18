const Tag = require('./models/tag');
const Merchant = require('./models/merchant');
const Transaction = require('./models/transaction');
const Account = require('./models/account');

const groceries = new Tag('groceries', 200);
const asda = new Merchant('Asda', groceries);
const tesco = new Merchant('Tesco', groceries);
const buyMilk = new Transaction(
    2,
    new Date(2022, 4, 16, 8, 34, 55, 3),
    asda
);
const buyBread = new Transaction(
    1.5,
    new Date(2022, 4, 18, 13, 50, 3, 55),
    tesco
);
const mainAccount = new Account();
mainAccount.addTransaction(buyMilk);
mainAccount.addTransaction(buyBread);
// console.log(mainAccount.transactions[0].gbpAmount());
// console.log(mainAccount.transactionsByTag(groceries));
console.log(mainAccount.transactionsByValueRange(2, 10));
