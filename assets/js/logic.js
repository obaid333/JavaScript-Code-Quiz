let questionDiv = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("startButton")



for (var i = 0; i < quizQuestions.length; i++) {
    questionTitle = quizQuestions[i];
    
    // if correct answer, go to next question, if incorrect, put timer down by 10s and go next question 
    
};


startButton.addEventListener("click", function(){
    startScreen.innerHTML = "";
    questionTitle.textContent = questionDiv[i] 
    
})
