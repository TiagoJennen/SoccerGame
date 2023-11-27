<?php
$servername = 'localhost';
$username = 'jouw_gebruikersnaam';
$password = 'jouw_wachtwoord';
$database = 'soccergame';

// Maak verbinding met de database
$conn = new mysqli($servername, $username, $password, $database);

// Controleer de verbinding
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Zet de karakterset
$conn->set_charset('utf8mb4');
?>
