const orderNumber = JSON.parse(localStorage.getItem ("order")); // Récupération du numéro de commande //

const customerName = JSON.parse(localStorage.getItem ("customer")); // Récupération du prénom du client //

document.getElementById('order-id').innerHTML = orderNumber; // Insertion du numéro de commande //

document.getElementById('customer-name').innerHTML = customerName; // Insertion du prénom du client //

localStorage.removeItem('order'); // Suppression du numéro de commande //

localStorage.removeItem('customer'); // Suppression du prénom du client//