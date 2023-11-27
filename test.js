// JavaScript-bestand: script.js
const questionSets = [
    {
        title: 'Attack 5 (Level 16)',
        questions: [
            ["Which Colombian player scored 3 goals in the 2018 World Cup?", ["Radamel Falcao", "James Rodriguez", "Yerry Mina", "Juan Cuadrado"], 2],
            // Add other questions...
        ],
        askedQuestions: []
    },
    {
        title: 'Attack 7',
        questions: [
            ["Another question for Attack 7?", ["Option 1", "Option 2", "Option 3", "Option 4"], 0],
            // Add other questions...
        ],
        askedQuestions: []
    },
    // Add other level sets...
];

function getRandomQuestion(levelSet) {
    const unansweredQuestions = levelSet.questions.filter(question => !levelSet.askedQuestions.includes(question));

    if (unansweredQuestions.length === 0) {
        // If all questions have been asked, reset the 'asked' list
        levelSet.askedQuestions = [];
    }

    const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
    const selectedQuestion = unansweredQuestions[randomIndex];
    levelSet.askedQuestions.push(selectedQuestion);

    return selectedQuestion;
}

function showMultipleChoiceQuestion(levelIndex) {
    const questionModal = document.getElementById('questionModal');
    const questionTitle = document.getElementById('questionTitle');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');

    const levelSet = questionSets[levelIndex];
    const randomQuestion = getRandomQuestion(levelSet);

    questionTitle.textContent = levelSet.title;
    questionText.textContent = randomQuestion[0];

    optionsContainer.innerHTML = '';

    randomQuestion[1].forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = `${index + 1}. ${option}`;

        optionButton.addEventListener('click', function () {
            checkAnswer(index, randomQuestion[2]);
            closeQuestionModal();
        });

        optionsContainer.appendChild(optionButton);
    });

    questionModal.style.display = 'block';
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert('Correct answer!');
    } else {
        alert('Incorrect answer. Please try again.');
    }
}

function closeQuestionModal() {
    document.getElementById('questionModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.player');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            console.log(`Clicked on level ${index + 1}`);
            showMultipleChoiceQuestion(index);
        });
    });
});
