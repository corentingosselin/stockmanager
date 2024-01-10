import { Bank, Client, CommonAccount } from './Bank.js';

const bank = new Bank();

const client1 = new Client("Marvin", 1000);
const client2 = new Client("Axel", 1500);
const client3 = new Client("Matthieu", 1100);
const client4 = new Client("Matteo", 2500);
const client5 = new Client("Bastien", 4800);

bank.addClient(client1);
bank.addClient(client2);
bank.addClient(client3);
bank.addClient(client4);
bank.addClient(client5);

client1.deposit(500);
client2.withdraw(200);

bank.displayAllClients();
bank.displayRichestClient(1);

client1.updateClientIdentity("Geoffroy");
bank.displayClient("Geoffroy");

client1.deposit(5500);
client2.withdraw(200);

const commonAccount = new CommonAccount("Axel et Bastien", client2, client5);

bank.removeClient(client5);

commonAccount.displayAccountInfo();
bank.displayRichestClient(5);