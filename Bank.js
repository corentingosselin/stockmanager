export class Bank {
  name = "";
  constructor(name) {
    this.name = name;
  }

  clients = ["Client 1", "Client 2", "Client 3", "Client 4"];

  addClient(client) {
    this.clients.push("Client 5")
  }

  displayClient(name) {
    this.clients[0]
  }

  displayAllClients() {
    for (let i=0; i < clients.lenght; i++) {
      this.clients[i]
    }
  }

  displayRichestClient(top = 10) {}

  removeClient(name) {
    this.name.pop()
    this.clients.pop()
  }
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

  updateClientIdentity(name) {}
    
}
