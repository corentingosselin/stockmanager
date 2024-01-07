export class Bank {
  name = "";
  constructor(name) {
    this.name = name;
  }

  clients = [];

  addClient(client) {}

  displayClient(name) {}

  displayAllClients() {}

  displayRichestClient(top = 10) {}

  removeClient(name) {}
}

export class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {}

  withdraw(amount) {}

  getBalance() {}

  displayClientIdentity() {}
}
