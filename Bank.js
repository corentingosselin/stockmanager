export class Bank {

  name = "";
  clients = [];

  constructor(name) {
    this.name = name;
  }


  addClient(client) {}

  displayClient(name) {}

  displayAllClients() {}

  displayRichestClient(top = 10) {}

  removeClient(name) {}
}





export class Client {

  allowedNegativeBalance = true;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {}

  withdraw(amount) {
    if(amount > this.balance && !this.allowedNegativeBalance) {
      console.log("Not enough money");
    }
  }

  getBalance() {}

  displayClientIdentity() {}

  updateClientIdentity(name) {}
    
}
