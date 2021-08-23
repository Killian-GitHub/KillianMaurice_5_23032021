// --- Initialisation de page produit --- //

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
                <form>
                    <label for="lenses-choice" class="mt-4">
                        <p>
                            Choisissez votre objectif :
                        </p>
                    </label>
                    </br>
                    <select id="lenses-select" class="form-select btn btn-light" name="lenses">
                        <!-- Insertion des objectifs -->
                    </select>
                </form>
                <p class="mt-4 mt-md-5 ml-2 font-weight-bold">
                    ${(response.price/100).toFixed(2).replace(".",",")} €
                </p>
                <div class="col text-center mt-4 mb-4">
                    <button id="btn-basket" class="btn btn-primary" type="button">
                        Ajouter au panier   
                    </button>
                </div>
            </div>`

        const productDisplay = document.getElementById("product-card"); // Condition d'affichage du code (error inner.html) //

        if(productDisplay){ // Injection du code //
            productDisplay.innerHTML = productPage;
        };

        // ---------- Lenses --------- //

        const choice = document.getElementById('lenses-select'); // Sélection de l'emplacement de l'option //

        if(choice){
            response.lenses.forEach((lenses) => { // Boucle de récupération des objectifs //
                let option = document.createElement('option');
                option.value = lenses;
                option.textContent = lenses;
                choice.appendChild(option); 
            })
        };

        // ---------- Panier ---------- //

        const btnAddToBasket = document.getElementById('btn-basket'); // Sélection du bouton "ajouter au panier" //

        if(btnAddToBasket){
            btnAddToBasket.addEventListener('click', function(event) { // Initialisation de l'action //
                event.preventDefault();

                const formChoice = choice.value; // Récupération du choix au formulaire //

                let productOption = { // Récupération des valeurs du formulaire //
                    image : response.imageUrl,
                    name : response.name,
                    id: response._id,
                    lense: formChoice,
                    quantity : 1,
                    price: response.price
                }

            // ---------- Local Storage ----------//

                let productRegisteredInLocalStorage = JSON.parse(localStorage.getItem ("productSelected")); // Variable key/value du local storage //

                function addToLocalStorage() { // Fonction d'ajout dans le local storage //
                    productRegisteredInLocalStorage.push(productOption); // Ajout de la sélection dans l'array //
                    localStorage.setItem("productSelected", JSON.stringify(productRegisteredInLocalStorage)); // Transformation au format JSON et envoie de la key dans la local storage //
                }

                function popupConfirmation() { // Popup de confirmation de commande du produit //
                    if(window.confirm(`L'appareil ${response.name} et l'objectif ${formChoice} ont bien été ajouter à votre panier.
                    Ok pour continuer ou Annuler pour revenir l'accueil`)){
                        window.location.href = "basket.html";
                    }

                    else{
                        window.location.href = "index.html";
                    }
                }

                if(productRegisteredInLocalStorage){ // Si il y a un produit, ajouter a l'array //
                    addToLocalStorage();
                    popupConfirmation();

                }else{ // Si le storage est vide, créer un array et ajouter un produit //
                    productRegisteredInLocalStorage = [];
                    addToLocalStorage();
                    popupConfirmation();
                }
            });
        };
    })