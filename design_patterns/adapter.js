// Interface commune pour le traitement des paiements
class PaymentProcessor {
    processPayment(amount) {
        console.log(`Paiement de ${amount} en cours.`);
    }
}

// Implémentation spécifique à PayPal
class PayPalAPI {
    executePayment(amount) {
        console.log(`Paiement de ${amount} via PayPal.`);
    }
}

// Adaptateur pour PayPal
class PayPalAdapter extends PaymentProcessor {
    constructor(paypal) {
        super();
        this.paypal = paypal;
    }

    processPayment(amount) {
        this.paypal.executePayment(amount);
    }
}


// Utilisation
const paypalApi = new PayPalAPI();
const paypalAdapter = new PayPalAdapter(paypalApi);

const localPayment = new PaymentProcessor();

const customerPaymentChoice = "paypal";
if(customerPaymentChoice === "paypal") {
    paypalAdapter.processPayment(100);
} else {
    localPayment.processPayment(100);
}   




