import { Bank,Client } from './Bank.js';
console.log('Hello World');


const bank = new Bank("My Bank");


const client = new Client("John Doe");

const account1 = new Account("Savings", 1000);
const account2 = new Account("Checking", 1500);

client.addAccount(account1);
client.addAccount(account2);

client.deposit(500, "Savings");
client.withdraw(200, "Checking");

console.log(`Balance for Savings: ${client.getBalance("Savings")}`);
console.log(`Balance for Checking: ${client.getBalance("Checking")}`);

client.displayAllAccountsInfo();