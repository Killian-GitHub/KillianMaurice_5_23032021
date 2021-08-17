// ---------- Numéro de commande ---------- //

const orderNumber = JSON.parse(localStorage.getItem ("order")); // Récupération du numéro de commande //

const orderIdDisplay = document.getElementById("order-id"); // Condition d'affichage du code (error inner.html) //

if(orderIdDisplay){ // Injection du code //
    orderIdDisplay.innerHTML = orderNumber;
};

localStorage.removeItem('order'); // Suppression du numéro de commande //

// ---------- Nom ---------- //

const customerName = JSON.parse(localStorage.getItem ("customer")); // Récupération du prénom du client //

const customerNameDisplay = document.getElementById("customer-name"); // Condition d'affichage du code (error inner.html) //

if(customerNameDisplay){ // Injection du code //
    customerNameDisplay.innerHTML = customerName;
};

localStorage.removeItem('customer'); // Suppression du prénom du client //