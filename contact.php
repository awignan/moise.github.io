<?php
// Vérifier si les données sont soumises via la méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Connexion à la base de données
    $servername = "localhost"; // Adresse du serveur MySQL
    $username = "moise"; // Nom d'utilisateur MySQL
    $password = "root"; // Mot de passe MySQL
    $dbname = "information"; // Nom de la base de données

    // Créer une connexion
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérifier la connexion
    if ($conn->connect_error) {
        die("La connexion à la base de données a échoué: " . $conn->connect_error);
    }

    // Préparer et exécuter la requête d'insertion
    $stmt = $conn->prepare("INSERT INTO formulaire (nom, prenom, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nom, $prenom, $email, $message);

    if ($stmt->execute()) {
        echo "Les données ont été insérées avec succès dans la base de données.";
    } else {
        echo "Erreur lors de l'insertion des données: " . $stmt->error;
    }

    // Fermer la connexion
    $stmt->close();
    $conn->close();
}
?>
