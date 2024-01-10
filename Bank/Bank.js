import { Client } from './Client';

export class Bank {
  name = "";
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

  addClient(client) {
    this.clients.push(client);
  }

  getClientByName(name) {
    return this.clients.find(client => client.name === name);
  }

  displayClient(name) {
    const client = this.getClientByName(name);

    if (!client) {
      throw new Error('Client not found');
    }

    client.displayClientIdentity();
    client.displayAllAccountsInfo();
  }

  displayAllClients() {
    this.clients.forEach(client => {
      client.displayClientIdentity();
      client.displayAllAccountsInfo();
    });
  }

  displayRichestClient(top = 10) {
    const sortedClients = this.clients.sort((a, b) => b.getTotalBalance() - a.getTotalBalance());
    const topClients = sortedClients.slice(0, top);

    topClients.forEach(client => {
      client.displayClientIdentity();
      client.displayAllAccountsInfo();
    });
  }

  removeClient(name) {
    this.clients = this.clients.filter(client => client.name !== name);
  }
}

export class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      throw new Error("Deposit amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return this.balance;
      } else {
        throw new Error("Insufficient funds.");
      }
    } else {
      throw new Error("Withdrawal amount must be greater than 0.");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account: ${this.name}, Balance: ${this.balance}`);
  }

  updateAccountName(name) {
    this.name = name;
  }
}


export class Client {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  deposit(amount, accountName) {
    const account = this.getAccountByName(accountName);

    if (account) {
      account.deposit(amount);
    } else {
      throw new Error(`Account with name ${accountName} not found.`);
    }
  }

  withdraw(amount, accountName) {
    const account = this.getAccountByName(accountName);

    if (account) {
      account.withdraw(amount);
    } else {
      throw new Error(`Account with name ${accountName} not found.`);
    }
  }

  transfer(amount, sourceAccountName, sourceClientName, destinationAccountName, destinationClientName) {
    const sourceClient = this.getClientByName(sourceClientName);
    const destinationClient = this.getClientByName(destinationClientName);

    if (sourceClient && destinationClient) {
      const sourceAccount = sourceClient.getAccountByName(sourceAccountName);
      const destinationAccount = destinationClient.getAccountByName(destinationAccountName);

      if (sourceAccount && destinationAccount) {
        sourceAccount.withdraw(amount);
        destinationAccount.deposit(amount);
        console.log(`Transferred ${amount} from ${sourceAccountName} of ${sourceClientName} to ${destinationAccountName} of ${destinationClientName}.`);
      } else {
        throw new Error("Source or destination account not found.");
      }
    } else {
      throw new Error("Source or destination client not found.");
    }
  }

  getBalance(accountName) {
    const account = this.getAccountByName(accountName);

    if (account) {
      return account.getBalance();
    } else {
      throw new Error(`Account with name ${accountName} not found.`);
    }
  }

  getTotalBalance() {
    return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
  }

  displayClientIdentity() {
    console.log(`Client: ${this.name}`);
  }

  updateClientIdentity(name) {
    this.name = name;
  }

  displayAllAccountsInfo() {
    this.accounts.forEach(account => {
      account.displayAccountInfo();
    });
  }

  getAccountByName(accountName) {
    return this.accounts.find(account => account.name === accountName);
  }
}


