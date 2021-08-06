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
            `<div class="row mt-3 mb-3">
                <div class="col-3 text-center">
                    <!-- Insertion de la photo du produit -->
                    <img src="${productRegisteredInLocalStorage[j].image}" class="panier__img" alt="Appareil photo vintage" />
                </div>
                <div class="col-3 text-center mt-5">
                    <!-- Insertion de la désignation du produit -->
                    ${productRegisteredInLocalStorage[j].name}
                </div>
                <div class="col-3 text-center mt-5">
                    <!-- Insertion de l'option du produit -->
                    ${productRegisteredInLocalStorage[j].lense}
                </div>
                <div class="col-3 text-center mt-5">
                    <!-- Insertion du prix produit -->
                    ${(productRegisteredInLocalStorage[j].price/100).toFixed(2).replace(".",",")} €
                </div>
            </div>`
    }

    if(j === productRegisteredInLocalStorage.length) { // Condition de récupération des éléments //
        document.getElementById('product-basket').innerHTML = inTheBasket;
    }
    
}