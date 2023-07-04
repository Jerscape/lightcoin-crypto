let balance = 500.00;


//Account class
class Account {
  constructor(userName) {
    this.userName = userName;
    this.balance = 0;
  }
}

//Transaction class
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}

//deposit class

class Deposit extends Transaction{

  value(){
    return this.amount
  }
}
//withdrawl class

class Withdrawal {

  value(){
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol", 500)

let t1 = new Withdrawal(50.25);

console.log('Transaction 1:', t1);

let t2 = new Withdrawal(9.99, myAccount);

console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance); //update?

let t3 = new Deposit(120.00, myAccount)

console.log('Transaction 3:', t3)

let t4 = new Withdrawal(15.00, myAccount)
console.log('Transaction 4:', t4)
