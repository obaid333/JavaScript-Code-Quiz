let questionDiv = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("startButton");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let feedback = document.getElementById("feedback");
let timeDisplay = document.getElementById("time");

let currentQuestionIndex = 0;

function loadQuestion() {
    let currentQuestion = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = "";

    currentQuestion.options.forEach(function(option) { //makes sure all options are shown at once
        let optionItem = document.createElement("li");
        optionItem.textContent = option;
        optionItem.addEventListener("click", onOptionClick);
        choices.appendChild(optionItem); //adds a new li for each option
    });
}

function onOptionClick() {
    let selectedAnswer = this.textContent;
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        //correct answer  
        feedback.style.display = "solid";
        feedback.textContent = "correct"; 
    } else {
        //incorrect answer
        feedback.style.display = "Solid";
        feedback.textContent = "Incorrect"; 
    };
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endScreen.style.display = "block";
        // Additional logic for quiz completion if needed
    };
};

startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    loadQuestion();    
})
