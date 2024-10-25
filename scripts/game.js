var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

var randomWord = getRandomWord();
var answerSection = document.getElementById("answer-section");
var dashes = "-".repeat(randomWord.length);

answerSection.textContent = dashes;


