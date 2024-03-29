
// ---1 Ecouter la soumission du formulaire
$(function(){
 


    $('#FormContact').submit(function(e){
        // ---2 Stopper la redirection de la page
        e.preventDefault();
         // 2b. Réinitialisation des erreurs
    $('#FormContact .alert-danger').remove();
        // ---3 RFécupérer les éléments à verifier
        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

       // ---4 Vérification des champs

            //Nom: si le champ est vide 
            //if (prenom.val().length === 0) autre méthodologie
            if (nom.val() == ''){
                    console.log("Vous avez oublié votre nom");
                    nom.addClass('is-invalid');
            }

             //Prenom: si le champ est vide 
            if (prenom.val() == ''){
                console.log("Vous avez oublié votre prenom");
                prenom.addClass('is-invalid');
            }
             //email: si le champ est vide 
            if (email.val() == ''){
                console.log("Vous avez oublié votre email");
               email.addClass('is-invalid');
            }
            //tel: si le champ est vide 
            if (tel.val() == ''){
                console.log("Vous avez oublié votre tel");
                tel.addClass('is-invalid');
            }

        // -- Comment je peux savoir s'il y a eu des erreurs sur mes champs ?
    // Je vais compter le nb d'éléments ayant la classe 'is-invalid'
    // console.log($('#contact .is-invalid'));

    if( $('#FormContact .is-invalid').length === 0 ) {
        console.log("Pas d'erreurs de validation");

        $(this).replaceWith(`
            <div class="alert alert-success">
                Votre contact à bien été transmis.
                Nous vous répondrons dans les meilleurs délais.
            </div>
        `);

    } else {
        console.log("Il y a eu des erreurs de validation");

        $(this).prepend(`
            <div class="alert alert-danger">
                Nous n'avons été en mesure de valider votre contact.
                Vérifiez vos informations.
            </div>
        `);

    }


    });

});