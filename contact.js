document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le formulaire
    var formulaire = document.getElementById('monFormulaire');

    // Écouter l'événement de soumission du formulaire
    formulaire.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        // Récupérer les données du formulaire
        var nom = formulaire.elements['nom'].value;
        var prenom = formulaire.elements['prenom'].value;
        var email = formulaire.elements['email'].value;
        var message = formulaire.elements['message'].value;

        // Vérifier si les champs sont vides
        if (nom === '' || prenom === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Vérifier si l'email est valide
        if (!isValidEmail(email)) {
            alert('Veuillez saisir une adresse email valide.');
            return;
        }

        // Envoyer les données à la destination spécifiée
        formulaire.submit();

        // Réinitialiser les champs du formulaire
        formulaire.reset();
    });

    // Fonction pour valider l'email
    function isValidEmail(email) {
        // Utilisation d'une expression régulière pour valider l'email
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
