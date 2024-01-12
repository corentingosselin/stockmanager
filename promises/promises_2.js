// Cette fois-ci nous devons réaliser 5 transactions en même temps et envoyer un email si toutes les transactions sont réussies.
// Vous pouvez modifier le pourcentage de chance de réussite de la transaction pour tester votre code.


function makeTransaction(amount) {
    console.log("Transaction started");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // La transaction a 50% de chance de réussir
        let random = 0;
        if (random > 50) {
          console.log("Transaction failed");
          reject("Transaction failed");
          return;
        } else {
          console.log("Transaction done with amount: " + amount + " €");
          resolve(amount);
        }
  
      }, 1000);
    });
  }
  
  function sendMail(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mail sent with message: " + message);
        resolve(message);
      }, 1000);
    });
  }
  
  console.log("Purchase started");

  const transactionPromises = [];
  
  for (let i = 1; i <= 5; i++) {
    const transactionPromise = makeTransaction(100 * i);
    transactionPromises.push(transactionPromise);
  }
  
  Promise.all(transactionPromises)
    .then((amounts) => {
      return sendMail("Purchase done with amounts: " + amounts.join(" €, ") + " €");
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log("Purchase done");
    });