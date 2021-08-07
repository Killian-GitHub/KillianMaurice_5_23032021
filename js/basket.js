let productRegisteredInLocalStorage = JSON.parse(localStorage.getItem ("products")); // Variable key/value du local storage //

var productBasket = document.getElementById('product-basket'); // Sélection du panier //

if (productRegisteredInLocalStorage === null) { // Si le panier est vide renvoyer panier vide //
    const emptyBasket = `
        <div class="empty-basket mt-4 mb-4 text-center">
            <p>
                Votre panier est vide.
            </p>
        </div>
       `;

    productBasket.innerHTML = emptyBasket;
}

else{ // Si il y a un article dans le panier injecter le produit dans la page //
    let inTheBasket = [];

    for(j = 0; j < productRegisteredInLocalStorage.length; j++){ // Boucle de récupération du tableau //

        inTheBasket = inTheBasket + // Code html du produit //
            `<div class="row mt-3 mb-3 pb-3 border-bottom">
                <div class="col-12 col-md-3 text-center">
                    <!-- Insertion de la photo du produit -->
                    <img src="${productRegisteredInLocalStorage[j].image}" class="panier__img" alt="Appareil photo vintage" />
                </div>
                <div class="col-6 col-md-3 text-left text-md-center mt-5">
                    <!-- Insertion de la désignation du produit -->
                    ${productRegisteredInLocalStorage[j].name}
                </div>
                <div class="col-6 col-md-3 text-right text-md-center mt-5">
                    <!-- Insertion de l'option du produit -->
                    ${productRegisteredInLocalStorage[j].lense}
                </div>
                <div class="col-12 col-md-3 text-right text-md-center mt-5">
                    <!-- Insertion du prix produit -->
                    ${(productRegisteredInLocalStorage[j].price/100).toFixed(2).replace(".",",")} €
                </div>
            </div>`
    }

    if(j === productRegisteredInLocalStorage.length) { // Condition de récupération des éléments //
        document.getElementById('product-basket').innerHTML = inTheBasket;
    }

    // ---------- Bouton pour vider le panier ---------- //

    const buttonForDeleteBasket = // Création Html du bouton //
    `<button id="btn-delete-basket" class="btn-sm btn-danger" type="button">
        Vider le panier  
    </button>`;

    document.getElementById('delete-basket').innerHTML = buttonForDeleteBasket; // Insertion du bouton //

    const btnDeleteBasket = document.getElementById('btn-delete-basket'); // Sélection du bouton //

    btnDeleteBasket.addEventListener('click', function(event) { // Initialisation de l'action //
    event.preventDefault()

    localStorage.removeItem('products'); // Suppression de tous produits dans le panier //

    alert('Votre panier a été vidé') // Message d'alerte //

    window.location.href = 'basket.html'; // Rechargement de la page //

    })
}

// ---------- Prix total ---------- //

let totalPriceTable = []; // Tableau de regroupement du prix des produits // 

for(let k = 0; k < productRegisteredInLocalStorage.length; k++){ // Boucle de récupération des prix //
    priceProductsInTheBasket = productRegisteredInLocalStorage[k].price; // Récupération du prix des produits dans le local storage //

    totalPriceTable.push(priceProductsInTheBasket) // Envoie du prix des articles dans le tableau //
}

const reducer = (accumulator, currentValue) => accumulator + currentValue; // Constante pour le calcul du prix //

const totalPrice = totalPriceTable.reduce(reducer,0); // Envoie du calcul dans le total //

document.getElementById('price-display').innerHTML = totalPrice;