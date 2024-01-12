function makeTransaction(amount) {
  console.log("Transaction started");
  return setTimeout(() => {

    //La transaction a 50% de chance de réussir
    let random = Math.floor(Math.random() * 100);
    if (random > 50) {
      console.log("Transaction failed");
      return;
    }

    console.log("Transaction done with amount: " + amount + " €");

  }, 1000);
}

function sendMail(message) {
  return setTimeout(() => {
    console.log("Mail sent with message: " + message);
  }, 1000);
}

console.log("Purchase started");

makeTransaction(100);
sendMail("Purchase done");

console.log("Purchase done");


// 1 - exécuter le code et observer le résultat, le comportement est-il celui attendu ?
// 2 - tenter de corriger le code pour que le comportement soit celui attendu
// 3 l'email doit être envoyé après la transaction, si la transaction échoue, l'email ne doit pas être envoyé