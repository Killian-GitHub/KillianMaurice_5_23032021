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

    btnDeleteBasket.addEventListener('click', function(event) { // Initialisation du bouton //
    event.preventDefault()

    localStorage.removeItem('products'); // Suppression de tous produits dans le panier //

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
                    <input type="text" class="form-control" id="form-adress" placeholder="Ex : 6 rue de la marre au Chênes" required>
                </div>
                <div class="form-group">
                    <label for="city">
                        Ville :
                    </label>
                    <input type="text" class="form-control" id="form-city" placeholder="Ex : Lyon" required>
                </div>
                <div class="form-group">
                    <label for="city-number">
                        Code postal :
                    </label>
                    <input type="text" class="form-control" id="form-city-number" placeholder="Ex : 69000" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">
                        Adresse e-mail :
                    </label>
                    <input type="text" class="form-control" id="form-email" placeholder="Ex : dupontmartin@gmail.com" required>
                </div>
            </form>
        </div>`;
    
    document.getElementById('order-form').innerHTML = orderForm;

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

        document.getElementById('validate-the-order').innerHTML = validateTheOrder;

};

    // ---------- Prix total ---------- //
        
let totalPriceTable = []; // Tableau de regroupement du prix des produits // 

for(let k = 0; k < productRegisteredInLocalStorage.length; k++){ // Boucle de récupération des prix //
    priceProductsInTheBasket = productRegisteredInLocalStorage[k].price; // Récupération du prix des produits dans le local storage //

    totalPriceTable.push(priceProductsInTheBasket) // Envoie du prix des articles dans le tableau //
}

    const reducer = (accumulator, currentValue) => accumulator + currentValue; // Constante pour le calcul du prix //

    const totalPrice = totalPriceTable.reduce(reducer,0); // Envoie du calcul dans le total //
        
    document.getElementById('price-display').innerHTML = (totalPrice/100).toFixed(2).replace(".",",") + ' €';

    // ---------- Formulaire ---------- //

const btnForValidOrder = document.getElementById('btn-for-valid-order'); // Sélection du bouton //


btnForValidOrder.addEventListener('click', function(event){ // Initialisation du bouton //
    event.preventDefault()

    class Form{ // Création d'une classe pour regrouper les valeurs du formulaire //
        constructor(){
        this.name = document.getElementById('form-name').value;
        this.firstname = document.getElementById('form-firstname').value;
        this.adress = document.getElementById('form-adress').value;
        this.city = document.getElementById('form-city').value;
        this.city_number = document.getElementById('form-city-number').value;
        this.email = document.getElementById('form-email').value;
        }
    }

    const formValues = new Form(); // Boucle de création du nouvel objet //

    // ----- Validation des données du formulaire ----- //

    const textAlert = (value) => { // Création de l'alerte de saise pour nom et prénom //
        return `${value} : Les chiffres et symboles ne sont pas autorisés, utilisez entre 3 et 20 caractères`;
    }

    const writingError = ("votre saisie n'est pas valide, ")

    const regExNamesAndCity = (value) => { // Création d'une regex pour le nom, le prénom et la ville //
        return /^[A-Za-z\-\s]{3,20}$/.test(value); // Description de la condition a tester //
    }

    const regExAdress = (value) => { // Création d'un regex pour l'adresse //
        return /^[A-Za-z0-9\-\s]{5,35}$/.test(value);
    }

    const regExCity_number = (value) => { // Création de la regex pour le code postale //
        return /^[0-9]{5}$/.test(value);
    }

    const regExEmail = (value) => { // Création de la regex pour l' Email //
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
    }

    function nameConfirmation() { // Fonction pour le test de la valeur  //
        const customerName = formValues.name; // Constante de récupération des valeurs 
        if(regExNamesAndCity(customerName)){ // Saisie de la valeur a tester avec la RegEx //
            return true;
        }else{
            alert(textAlert('Nom')); // Envoie de l'alerte si la saise n'est pas validé par la RegEx //
            return false;
        }
    };

    function firstnameConfirmation() {
        const customerFirstname = formValues.name;
        if(regExNamesAndCity(customerFirstname)){
            return true;
        }else{
            alert(textAlert('Prénom'));
            return false;
        }
    };

    function cityConfirmation() {
        const customerCity = formValues.city;
        if(regExNamesAndCity(customerCity)){
            return true;
        }else{
            alert("Ville : " + writingError + "entrez le nom de votre ville")
            return false;
        }
    };

    function cityNumberConfirmation() {
        const customerCityNumber = formValues.city_number;
        if(regExCity_number(customerCityNumber)){
            return true;
        }else{
            alert("Code postal : " + writingError + "utilisez au minimum 5 chiffres")
            return false;
        }
    };

    function emailConfirmation() {
        const customerEmail = formValues.email;
        if(regExEmail(customerEmail)){
            return true;
        }else{
            alert("Email : " + writingError + "saisissez votre email")
            return false;
        }
    };

    function adressConfirmation() {
        const customerAdress = formValues.adress;
        if(regExAdress(customerAdress)){
            return true;
        }else{
            alert("Adresse : " + writingError + "entrez votre adresse sans caractères spéciaux")
            return false;
        }
    };

    if(nameConfirmation(), firstnameConfirmation(), cityConfirmation(), cityNumberConfirmation(), emailConfirmation(), adressConfirmation()) { // Fonction de validation, si le formulaire est bien rempli, envoyer dans le local storage //
        localStorage.setItem('formValues', JSON.stringify(formValues)); // Envoie des informations du formulaire dans le local storage et conversion JSON //
    }
    

    // ---------- Serveur ---------- //

    let sendToServer = JSON.stringify({ // Récupération des produits sélectionnés et des informations du formulaire dans un objet a envoyer au serveur //
        productRegisteredInLocalStorage,
        formValues,
    })

    fetch('http://localhost:3000/api/cameras/order', { // Envoie de la commande au serveur avec POST //
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: sendToServer,
    })
    .then((response) => response.json())
    .then((r) => {
        localStorage.setItem('form', JSON.stringify(r.form));
        window.location.assign('order.html?orderId=' + r.orderId);
    })
    .catch(function (error) {
        console.log('fetch error')
    });

});