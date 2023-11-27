<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SoccerGame</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <img src="voetballijnen.png" class="field-image">
        <?php
        // Verbinding maken met de database
        include('config.php');

        // Functie om een willekeurige vraag op te halen op basis van het niveau
        function getRandomQuestionByLevel($conn, $level) {
            $query = "SELECT * FROM `vragen` WHERE `Level` = $level ORDER BY RAND() LIMIT 1";
            $result = $conn->query($query);

            if ($result->num_rows > 0) {
                return $result->fetch_assoc();
            } else {
                return false;
            }
        }

                // Loop door alle niveaus en toon een vraag voor elk niveau
            for ($i = 1; $i <= 16; $i++) {
            echo "Current level: $i <br>";

            // Onderstaande regel toegevoegd voor debugging
            $conn->set_charset('utf8mb4');

            $question = getRandomQuestionByLevel($conn, $i);
            var_dump($question); // Bekijk de inhoud van $question
            // Je bestaande code om de vraag weer te geven
}
        // Loop door alle niveaus en toon een vraag voor elk niveau
for ($i = 1; $i <= 16; $i++) {
    echo "Current level: $i <br>";

    // Onderstaande regel toegevoegd voor debugging
    $conn->set_charset('utf8mb4');

    $question = getRandomQuestionByLevel($conn, $i);
    var_dump($question); // Bekijk de inhoud van $question
    // Je bestaande code om de vraag weer te geven
}

        // Sluit de databaseverbinding
        $conn->close();
        ?>
    </div>

    <div id="questionModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeQuestionModal()">&times;</span>
            <h2 id="questionTitle"></h2>
            <p id="questionText"></p>
            <div id="options"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>