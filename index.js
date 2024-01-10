import { Bank,Client } from './Bank.js';
console.log('Hello World');


const bank = new Bank("My Bank");


// Ajout de 4 clients
const client1 = new Client("John Doe", 1000);
const client2 = new Client("Jane Doe", 1500);
const client3 = new Client("Bob Smith", 2000);
const client4 = new Client("Alice Johnson", 1200);

// Ajout des clients à la banque
bank.addClient(client1);
bank.addClient(client2);
bank.addClient(client3);
bank.addClient(client4);

// Affichage de tous les noms des clients
bank.displayAllClientNames();


console.log(bank.name);

client1.deposit(500); // Déposer 500 dans le compte de John Doe
client1.withdraw(200); // Retirer 200 du compte de John Doe

client1.transfer(200, client2);

console.log(`New balance for ${client1.name}: ${client1.getBalance()}`);