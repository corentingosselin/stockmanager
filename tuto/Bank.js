export class Bank {

  clients = [];
  _id = "1234";

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  getName() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get id() {
    return this._id;
  }


}




export class Client {

  allowedNegativeBalance = false;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {}

  withdraw(amount) {
    if(amount > this.balance && !this.allowedNegativeBalance) {
      console.log("Not enough money");
    }
    console.log("withdraw", amount);
  }

  getBalance() {}

  displayClientIdentity() {}

  updateClientIdentity(name) {}
    
}
