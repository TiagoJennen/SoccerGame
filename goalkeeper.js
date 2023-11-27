// JavaScript-bestand: randomizer.js
const questions = [
    {
      question: "Wat is je favoriete kleur?",
      choices: ["Rood", "Blauw", "Groen", "Geel"]
    },
    {
      question: "Wat is je favoriete dier?",
      choices: ["Hond", "Kat", "Leeuw", "Aap"]
    },
    {
      question: "Wat is je favoriete vakantiebestemming?",
      choices: ["Strand", "Bergen", "Stad", "Platteland"]
    },
    {
      question: "Wat is je favoriete film?",
      choices: ["Actie", "Drama", "Komedie", "Science Fiction"]
    },
    {
      question: "Wat is je favoriete boek?",
      choices: ["Fictie", "Non-fictie", "Science Fiction", "Mysterie"]
    }
  ];
 
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
 
  function displayQuestion(questionObj) {
    const questionDisplay = document.getElementById('questionDisplay');
    const formattedQuestion = `${questionObj.question}\n\n${questionObj.choices.map((choice, index) => `<button class="choiceButton" data-index="${index}">${index + 1}. ${choice}</button>`).join('')}`;
    questionDisplay.innerHTML = formattedQuestion;
 
    // Voeg klikgebeurtenissen toe aan de keuzeknoppen
    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(button => {
      button.addEventListener('click', function() {
        const selectedChoiceIndex = this.getAttribute('data-index');
        alert(`Je hebt gekozen voor: ${questionObj.choices[selectedChoiceIndex]}`);
      });
    });
  }
 
  document.getElementById('generateButton').addEventListener('click', function() {
    const randomQuestion = getRandomQuestion();
    displayQuestion(randomQuestion);
  });