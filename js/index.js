fetch('http://localhost:3000/api/cameras') // Requête http //
    .then((response) => response.json())
    .then((response) => {
        console.log(response); // Vérification de la réponse //

        let getAllCameras = ""; // Variable pour les produits //

        for (let i in response) { // Boucle de récupération //

        getAllCameras += // Création HTML des produits //
            `<div class="card col-md-5 mb-lg-4 card__body">
                <a href="./product.html?${response[i]._id}" class="product-link">
                    <img class="card-img-top card__img" src="${response[i].imageUrl}" alt="Appareil photo vintage" />
                </a>
                <div class="card-body card__body-text">
                    <h2 class="card-title mt-1">
                        ${response[i].name}
                    </h2>
                    <p class="card-text text-right font-weight-bold">
                        ${(response[i].price/100).toFixed(2).replace(".",",")} €
                    </p>
                </div>
            </div>`
        }

        const camerasDisplay = document.getElementById("camera-cards"); // Condition d'affichage du code (error inner.html) //

        if(camerasDisplay){ // Injection du code //
            camerasDisplay.innerHTML = getAllCameras;
        };

    })
    .catch(error => {
        error('Nous ne parvenons pas à vous connecter, veuillez vérifiez votre réseau et reessayer');
        console.log("erreur : " + erreur);
    });