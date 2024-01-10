export class Bank {
  name = "";
  constructor(name) {
    this.name = name;
  }

  clients = [];

  addClient(client) {
    this.clients.push(client);
  }

  displayClient(name) {
    const client = this.clients.find(client => client.name === name);
    if (!client) {
      console.log('Client not found');
      return;
    }
    console.log(`Client: ${client.name}, Balance: ${client.balance}`);
  }

  displayAllClients() {
    const client = this.clients.find(client => client.name === name);

    if (client) {
      console.log(`Client: ${client.name}, Balance: ${client.balance}`);
    } else {
      console.log(`Client with name ${name} not found.`);
    }
  }

  displayAllClients() {
    this.clients.forEach(client => {
      console.log(`Client: ${client.name}, Balance: ${client.balance}`);
    });
  }

  displayAllClientNames() {
    const clientNames = this.clients.map(client => client.name);
    console.log("All Client Names:", clientNames.join(", "));
  }

  displayRichestClient(top = 10) {
    const sortedClients = this.clients.sort((a, b) => b.balance - a.balance);
    const topClients = sortedClients.slice(0, top);

    topClients.forEach(client => {
      console.log(`Client: ${client.name}, Balance: ${client.balance}`);
    });
  }

  removeClient(name) {
    this.clients.pop(name);
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
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
    } else {
      console.log("Withdrawal amount must be greater than 0 and less than or equal to the current balance.");
    }
  }

  transfer(amount, recipient) {
    if (amount > 0 && amount <= this.balance) {
      this.withdraw(amount);
      recipient.deposit(amount);
      console.log(`Transferred ${amount} from ${this.name}'s account to ${recipient.name}'s account.`);
    } else {
      console.log("Transfer amount must be greater than 0 and less than or equal to the current balance.");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayClientIdentity() {
    console.log(`Client: ${this.name}`);
  }

  updateClientIdentity(name) {
    this.name = name;
  }
    
}
