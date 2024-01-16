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
        feedback.textContent = "correct"; 
        //score goes up
    } else {
        //incorrect answer
        feedback.textContent = "Incorrect"; 
        //timer goes down by 10s
    };
    setTimeout(function(){feedback.textContent = ""}, 1000); //replaces "correct" with empty string
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endScreen.style.display = "block";
        // Additional logic for quiz completion if needed
    };
};

function countdown() {
    var timeLeft = 100;
  
    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {
        time.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = "0";
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    loadQuestion();   
    countdown(); 
})
