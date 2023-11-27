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
        $servername = 'localhost';
        $username = 'jouw_gebruikersnaam';
        $password = 'jouw_wachtwoord';
        $database = 'soccergame';

        $conn = new mysqli($servername, $username, $password, $database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $conn->set_charset('utf8mb4');

        function getRandomQuestionByLevel($conn, $level) {
            $query = "SELECT * FROM `vragen` WHERE `Level` = $level ORDER BY RAND() LIMIT 1";
            $result = $conn->query($query);

            if ($result->num_rows > 0) {
                return $result->fetch_assoc();
            } else {
                return false;
            }
        }

        for ($i = 1; $i <= 16; $i++) {
            echo "Current level: $i <br>";

            $conn->set_charset('utf8mb4');

            $question = getRandomQuestionByLevel($conn, $i);
            var_dump($question); 
        }

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
