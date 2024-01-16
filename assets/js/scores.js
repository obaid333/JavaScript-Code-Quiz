let clear = document.getElementById("clear");
let highscoresList = document.getElementById("highscores"); // Define highscoresList outside the function

document.addEventListener("DOMContentLoaded", function () {
    // Call a function to display scores when the highscores.html page loads
    displayScores();
});

function displayScores() {
    // Retrieve scores from local storage
    let storedScores = localStorage.getItem("scores");

    // Check if there are stored scores
    if (storedScores) {
        // Parse the JSON string to convert it into an array
        scores = JSON.parse(storedScores);

        // Sort the scores by score in descending order
        scores.sort((a, b) => b.score - a.score);

        // Display the scores in an ordered list
        scores.forEach(function (score) {
            let listItem = document.createElement("li");
            listItem.textContent = `${score.name} - Score: ${score.score}, Time Left: ${score.time}s`;
            highscoresList.appendChild(listItem);
        });
    }
}

clear.addEventListener("click", function () {
    highscoresList.innerHTML = ""; // Clear the content of highscoresList
});

