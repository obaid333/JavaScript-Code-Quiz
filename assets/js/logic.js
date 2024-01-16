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
let timeLeft = 60; // Initial time for the quiz (adjust as needed)
let timerInterval;
let playerScore = 0;
let scores = [];

function loadQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = "";

    currentQuestion.options.forEach(function (option) {
        let optionItem = document.createElement("li");
        optionItem.textContent = option;
        optionItem.addEventListener("click", onOptionClick);
        choices.appendChild(optionItem);
    });
}

function onOptionClick() {
    let selectedAnswer = this.textContent;
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "Correct! Score +10";
        playerScore += 10;
    } else {
        feedback.textContent = "Incorrect! Time -10s";
        timeLeft -= 10;
    }

    document.getElementById("time").textContent = timeLeft;

    setTimeout(function () {
        feedback.textContent = "";
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            clearInterval(timerInterval); // Stop the timer
            displayFinalResults();
        }
    }, 1000);
}

function countdown() {
    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeDisplay.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            feedback.textContent = "Time's up!";
            endScreen.style.display = "block";
            questionTitle.style.display = "none";
            choices.style.display = "none";
            displayFinalResults();
        }
    }, 1000);
}

function displayFinalResults() {
    finalScore.textContent = playerScore;
    timeDisplay.textContent = timeLeft; // Display the final time left
    endScreen.style.display = "block";
    questionTitle.style.display = "none";
    choices.style.display = "none";
}

startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    loadQuestion();
    countdown();
});

submitButton.addEventListener("click", function () {
    let playerInitials = document.getElementById("initials").value;
    

    scores.push({
        name: playerInitials,
        score: playerScore,
        time: timeLeft,
    });

    // Save the updated scores array in local storage
    localStorage.setItem("scores", JSON.stringify(scores));

    // Redirect to highscores.html after submitting the quiz
    window.location.href = "highscores.html";
});