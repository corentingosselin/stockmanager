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
    let result = None;
    for (let client in clients) {
      if(client.name == name){result = client.getBalance();
      }
    }
    console.log(result);
  }

  displayAllClients() {
    for (let client in clients) {
      client.displayClientIdentity();
    }
  }

  displayRichestClient(top = 10) {
    result = [];
    for (let step = 0; step < top; step++) {
      max = clients[0].balance;
      his_name = clients[0].name;
      for (let client in clients) {
        if(client.balance > max){
          max = client.balance;
          his_name = client.name;
        }
      }
      result.push(his_name)
    console.log(result);
    }
  }

  removeClient(name) {
    for (let step = 0; step < this.clients.length; step++) {
      if(client.name == name){delete clients[step]}
    }
  }
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
