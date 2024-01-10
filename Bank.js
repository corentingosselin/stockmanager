export class Bank {
  constructor() {
    this.clients = [];
  }

  addClient(client) {
    this.clients.push(client);
  }

  removeClient(name) {
    this.clients = this.clients.filter(client => client.name !== name);
  }

  displayClient(name) {
    const client = this.clients.find(client => client.name === name);
    if (client) {
      console.log(`Nom : ${client.name}, Dépositaire de: ${client.balance}`);
    } else {
      console.log(`Le client nommé ${name} n'a pas été trouvé.`);
    }
  }

  displayAllClients() {
    this.clients.forEach(client => {
      console.log(`Nom du client: ${client.name}, Dépositaire de: ${client.balance}`);
    });
  }

  displayRichestClient(top = 5) {
    const sortedClients = this.clients.slice().sort((a, b) => b.balance - a.balance);
    const topClients = sortedClients.slice(0, top);
    topClients.forEach(client => {
      console.log(`Nom du client: ${client.name}, Dépositaire de: ${client.balance}`);
    });
  }
}

export class CommonAccount {
  constructor(accountName, client1, client2) {
    this.accountName = accountName;
    this.clients = [client1, client2];
    this.balance = client1.balance + client2.balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Nom du Compte: ${this.accountName}`);
    console.log(`Depositire de: ${this.balance}€`);
    console.log("Apparteant à:");
    this.clients.forEach(client => {
      console.log(`  Nom du client: ${client.name}`);
    });
  }
}

export class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Le client ${this.name} a déposé :`, amount , "€")
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Le client ${this.name} a retiré :`, amount , "€")
    }
  }

  getBalance() {
    return this.balance;
  }

  displayClientIdentity() {
    console.log(`Nom du client: ${this.name}, Dépositaire: ${this.balance} €`);
  }

  updateClientIdentity(name) {
    console.log(`Le compte de: ${this.name}`);
    this.name = name;
    console.log(`appartient désormais à : ${this.name}`);
  }
}
