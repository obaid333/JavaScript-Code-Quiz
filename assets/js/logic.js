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
    var currentQuestion = quizQuestions[currentQuestionIndex];
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
        feedback.textContent = "correct"; 
        //score goes up
    } else {
        //incorrect answer
        feedback.textContent = "Incorrect"; 
        //timer goes down by 10s
        // timeLeft = timeLeft - 10;
    };
    setTimeout(function(){feedback.textContent = ""}, 1000); //replaces "correct" with empty string
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        setTimeout(function(){feedback.textContent = "ALL DONE!!!"}, 1000); // Display a message for time's up           
        endScreen.style.display = "block";
        questionTitle.style.display = "none";
        choices.style.display = "none";
    };
};


function countdown() {
    var timeLeft = 50;
    timeDisplay.textContent = timeLeft; // Set initial display

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeDisplay.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval); // Stop the timer
            feedback.textContent = "Time's up!"; // Display a message for time's up           
            endScreen.style.display = "block";
            questionTitle.style.display = "none";
            choices.style.display = "none";
        }
    }, 1000);
}

  startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    loadQuestion();   
    countdown(); 
})
