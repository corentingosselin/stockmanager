export class Bank {
  name = "";
  constructor(name) {
    this.name = name;
  }

  clients = [];

  addClient(client) {
    this.clients.push(client)
  }

  displayClient(name) {
    var result = "";
    for (var client in clients) {
      if(client.name == name){result += i.getBalance();
      }
    }
    console.log(result);
  }

  displayAllClients() {
    for (var client in clients) {
      client.displayClientIdentity();
    }
  }

  displayRichestClient(top = 10) {
    for (let step = 0; step < top; step++) {
      for (var client in clients) {
        if(client.balance == name){result += i.getBalance();
        }
      }
    console.log(result);
    }
  }

  removeClient(name) {}
}

export class Client {

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }

  displayClientIdentity() {
    console.log(this.name);
  }

  updateClientIdentity(name) {
    this.name = name;
  }
    
}
