let productRegisteredInLocalStorage = JSON.parse(localStorage.getItem ("productSelected")); // Variable key/value du local storage //

const basketDisplay = document.getElementById('product-basket'); // Sélection du panier //

if(basketDisplay){ // condition d'affichage du panier //
    
    const emptyBasket = // Code html panier vide //
    `<div class="empty-basket mt-4 mb-4 text-center">
        <p>
            Votre panier est vide.
        </p>
    </div>`
    ;

    if (productRegisteredInLocalStorage === null){ // Si le panier est vide renvoyer panier vide //
        basketDisplay.innerHTML = emptyBasket;
    } else { // Si il y a un article dans le panier injecter le produit dans la page //
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
            basketDisplay.innerHTML = inTheBasket;
        };
    };
    // ---------- Bouton pour vider le panier ---------- //

    const buttonForDeleteBasket = // Création Html du bouton //
    `<button id="btn-delete-basket" class="btn-sm btn-danger" type="button">
        Vider le panier  
    </button>`;

    document.getElementById('delete-basket').innerHTML = buttonForDeleteBasket; // Insertion du bouton //

    const btnDeleteBasket = document.getElementById('btn-delete-basket'); // Sélection du bouton //

    btnDeleteBasket.addEventListener('click', function(event) { // Initialisation du bouton //
    event.preventDefault()

        localStorage.removeItem('productSelected'); // Suppression de tous produits dans le panier //

        alert('Votre panier a été vidé') // Message d'alerte //

        window.location.href = 'basket.html'; // Rechargement de la page //

    })

    const orderForm = // Création Html du formulaire //
        `<div class="card-body">
            <h2 class="card-title border-bottom pb-3">Adresse de livraison</h2>
            <form>
                <div class="form-group">
                    <label for="name">
                        Nom :
                    </label>
                    <input type="text" class="form-control" id="form-name" placeholder="Ex : Dupont" required>
                </div>
                <div class="form-group">
                    <label for="surname">
                        Prénom :
                    </label>
                    <input type="text" class="form-control" id="form-firstname" placeholder="Ex : Martin" required>
                </div>
                <div class="form-group">
                    <label for="adress">
                        Adresse :
                    </label>
                    <input type="text" class="form-control" id="form-adress" placeholder="Ex : 6 rue de la mare au Chêne" required>
                </div>
                <div class="form-group">
                    <label for="city">
                        Ville :
                    </label>
                    <input type="text" class="form-control" id="form-city" placeholder="Ex : Lyon" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">
                        Adresse e-mail :
                    </label>
                    <input type="text" class="form-control" id="form-email" placeholder="Ex : dupontmartin@gmail.com" required>
                </div>
            </form>
        </div>`;

    const formDisplay = document.getElementById("order-form"); // Condition d'affichage du code (error inner.html) //

    if(formDisplay){ // Injection du code //
        formDisplay.innerHTML = orderForm;
    };

    const validateTheOrder = // Création Html du paiement //
        `<div class="card-body">
            <div class="row border-bottom mt-4 mb-5 pb-3">
                <h2 class="card-title col-5">
                    Total
                </h2>
                <p id="price-display" class="card-text col-7 text-right font-weight-bold">
                    <!-- Insertion du prix total du panier -->
                </p>
            </div>
            <p class="card-text mt-5 mb-5 font-weight-bold">
                Livraison offerte 
            </p>
            <button id="btn-for-valid-order" class="btn btn-success btn-block mt-5 mb-5">
                PAIEMENT
            </button>
            <p class="card-text font-weight-bold mt-5 mb-4">
                Nous acceptons :
            </p>
            <div class="payment-card__container">
                <i class="payment-card fab fa-cc-visa"></i>
                <i class="payment-card fab fa-cc-mastercard"></i>
                <i class="payment-card fab fa-cc-paypal"></i>
                <i class="payment-card fab fa-cc-amex"></i>
            </div>
        </div>`;

    const validDisplay = document.getElementById("validate-the-order"); // Condition d'affichage du code (error inner.html) //

    if(validDisplay){ // Injection du code //
        validDisplay.innerHTML = validateTheOrder;
    };

};

    // ---------- Prix total ---------- //
        
let totalPriceTable = []; // Tableau de regroupement du prix des produits //

let priceDisplay = document.getElementById('price-display');

if(productRegisteredInLocalStorage){
    for(let k = 0; k < productRegisteredInLocalStorage.length; k++){ // Boucle de récupération des prix //
        priceProductsInTheBasket = productRegisteredInLocalStorage[k].price; // Récupération du prix des produits dans le local storage //

        totalPriceTable.push(priceProductsInTheBasket) // Envoie du prix des articles dans le tableau //
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue; // Constante pour le calcul du prix //

    const totalPrice = totalPriceTable.reduce(reducer,0); // Envoie du calcul dans le total //
            
    if(priceDisplay){
        priceDisplay.innerHTML = (totalPrice/100).toFixed(2).replace(".",",") + ' €';
    }
};

    // ---------- Formulaire ---------- //

const btnForValidOrder = document.getElementById('btn-for-valid-order'); // Sélection du bouton //

if(btnForValidOrder){
    btnForValidOrder.addEventListener('click', function(event){ // Initialisation du bouton //
        event.preventDefault()

        class Form{ // Création d'une classe pour regrouper les valeurs du formulaire //
            constructor(){
            this.lastName = document.getElementById('form-name').value;
            this.firstName = document.getElementById('form-firstname').value;
            this.address = document.getElementById('form-adress').value;
            this.city = document.getElementById('form-city').value;
            this.email = document.getElementById('form-email').value;
            }
        }

        const contact = new Form(); // Boucle de création du nouvel objet //

        // ----- Validation des données du formulaire ----- //

        const textAlert = (value) => { // Création de l'alerte de saise pour nom et prénom //
            return `${value} : Les chiffres et symboles ne sont pas autorisés, utilisez entre 3 et 20 caractères`;
        }

        const writingError = ("votre saisie n'est pas valide, ")

        const regExNamesAndCity = (value) => { // Création d'une regex pour le nom, le prénom et la ville //
            return /^[A-Za-zÀ-ÿ\-\s]{3,20}$/.test(value); // Description de la condition a tester //
        }

        const regExAdress = (value) => { // Création d'un regex pour l'adresse //
            return /^[A-Za-zÀ-ÿ0-9\-\s]{5,35}$/.test(value);
        }

        const regExEmail = (value) => { // Création de la regex pour l' Email //
            return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
        }

        function nameConfirmation() { // Fonction pour le test de la valeur  //
            const customerName = contact.lastName; // Constante de récupération des valeurs 
            if(regExNamesAndCity(customerName)){ // Saisie de la valeur a tester avec la RegEx //
                return true;
            }else{
                alert(textAlert('Nom')); // Envoie de l'alerte si la saise n'est pas validé par la RegEx //
                return false;
            }
        };

        function firstnameConfirmation() {
            const customerFirstname = contact.firstName;
            if(regExNamesAndCity(customerFirstname)){
                return true;
            }else{
                alert(textAlert('Prénom'));
                return false;
            }
        };

        function adressConfirmation() {
            const customerAdress = contact.address;
            if(regExAdress(customerAdress)){
                return true;
            }else{
                alert("Adresse : " + writingError + "entrez votre adresse sans caractères spéciaux")
                return false;
            }
        };

        function cityConfirmation() {
            const customerCity = contact.city;
            if(regExNamesAndCity(customerCity)){
                return true;
            }else{
                alert("Ville : " + writingError + "entrez le nom de votre ville")
                return false;
            }
        };

        function emailConfirmation() {
            const customerEmail = contact.email;
            if(regExEmail(customerEmail)){
                return true;
            }else{
                alert("Email : " + writingError + "saisissez votre email")
                return false;
            }
        };

        if(nameConfirmation(), firstnameConfirmation(), adressConfirmation(), cityConfirmation(), emailConfirmation()) { // Fonction de validation, si le formulaire est bien rempli, envoyer dans le local storage //
            localStorage.setItem('contact', JSON.stringify(contact)); // Envoie des informations du formulaire dans le local storage et conversion JSON //
        };
        

        // ---------- Serveur ---------- //

        let products = []; // Création d'un array pour les Id produits //
        if (localStorage.getItem('productSelected') !== null) { // Condition de récupération //
            let productTab = JSON.parse(localStorage.getItem('productSelected')); 
            productTab.forEach(p => { // Boucle de récupération des Id //
            products.push(p.id);
            })
        };

        fetch("http://localhost:3000/api/cameras/order", { // Envoie de la commande a l'API //
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                contact, products 
            }),
        })
        .then((response) => response.json())
        .then((r) => {
            localStorage.setItem("order", JSON.stringify(r.orderId)); // Récupération du numéro de commande dans le local storage //
            localStorage.setItem("customer", JSON.stringify(r.contact.firstName));
            localStorage.removeItem('productSelected');
            localStorage.removeItem('contact');
            window.location.href = 'order.html'; // Redirection vers la page de confirmation //
        })
        .catch(error => {
            error('Nous ne parvenons pas à vous connecter, veuillez vérifiez votre réseau et reessayer');
            console.log("erreur : " + erreur);
        });
    });
};