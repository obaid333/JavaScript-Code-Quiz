let questionDiv = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let startScreen = document.getElementById("start-screen");


document.addEventListener("click", function(){
    startScreen.innerHTML = "";
})






for (let i = 0; i < quizQuestions.length; i++) {
    questionTitle = quizQuestions[i];
    console.log(questionTitle);
};