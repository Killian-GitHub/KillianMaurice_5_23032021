const productId = window.location.search.substring(1); // Récupération de l'Id //

fetch(`http://localhost:3000/api/cameras/${productId}`) // Requête http //
    .then((response) => response.json())
    .then(response => {

        let productPage = ""; // Variable de la fiche produit //

        productPage = // Création HTML de la fiche produit //
            `<div class="col-12 col-md-6">
                <img class="product__img" src="${response.imageUrl}" alt="Appareil photo vintage" />
            </div>
            <div class="col-12 col-md-6">
                <h2 class="text-center mt-4">
                    ${response.name}
                </h2>
                <p class="mt-4 mt-md-5 product__description">
                    ${response.description}
                </p>
                <p class="mt-4 mt-md-5 product__lenses">
                    ${response.lenses}
                </p>
                <p class="mt-4 mt-md-5 text-left font-weight-bold product__price">
                ${(response.price/100).toFixed(2).replace(".",",")}€
                </p>
                <div class="col text-center mt-4 mb-4">
                    <button class="btn btn-primary product__add" type="button">
                        Ajouter au panier   
                    </button>
                </div>
            </div>`

        document.getElementById('product-card').innerHTML = productPage;
    })
    
    .catch(e => { // Message d'erreur //
        errorMessage();
        console.log(e);
    });