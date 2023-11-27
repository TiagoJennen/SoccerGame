function showMultipleChoiceQuestion(title, text, options, correctIndex) {
    const button = event.target;
    const currentLevel = parseInt(button.getAttribute('data-current-level'));

    document.getElementById('questionTitle').innerHTML = title;
    document.getElementById('questionText').innerHTML = text;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.innerHTML = option;
        optionButton.onclick = function() {
            if (index === correctIndex) {
                alert('Correct!'); 
                button.setAttribute('data-current-level', currentLevel + 1);
                if (currentLevel + 1 > 15) {
                    alert('Congratulations! You have completed all levels.');
                }
            } else {
                alert('Incorrect!'); 
            }
            closeQuestionModal();
        };
        optionsContainer.appendChild(optionButton);
    });

    document.getElementById('questionModal').style.display = 'block';
}

function closeQuestionModal() {
    document.getElementById('questionModal').style.display = 'none';
}
function showQuestionForLevel(level) {
    // Maak een AJAX-verzoek om de vraag op te halen voor het opgegeven niveau
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var question = JSON.parse(xhr.responseText);
            showMultipleChoiceQuestion(question.title, question.text, question.options, question.correctIndex);
        }
    };
    xhr.open("GET", "get_question.php?level=" + level, true);
    xhr.send();
}