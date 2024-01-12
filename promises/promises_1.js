async function makeTransaction(amount) {
  console.log("Transaction started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //La transaction a 50% de chance de réussir
      let random = Math.floor(Math.random() * 100);
      if (random > 50) {
        console.log("Transaction failed");
        reject("Transaction failed");
        return;
      }
      resolve("Transaction done with amount: " + amount + " €");
    }, 1000);
  });
}

async function sendMail(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mail sent with message: " + message);
      resolve();
    }, 1000);
  });
}

console.log("Purchase started");

makeTransaction(100)
  .then((message) => {
    console.log(message);
    sendMail("The transaction is a success");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Purchase done");

// 1 - exécuter le code et observer le résultat, le comportement est-il celui attendu ?
// 2 - tenter de corrigé le code pour que le comportement soit celui attendu
// 3 l'email doit être envoyé après la transaction, si la transaction échoue, l'email ne doit pas être envoyé
