var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

lives = 6;
var randomWord = getRandomWord();
var answerSection = document.getElementById("answer-section");
var dashes = "-".repeat(randomWord.length);

answerSection.textContent = dashes;

var lettersSelected = document.querySelectorAll('.letter');

lettersSelected.forEach((letterElement) => {
    lettersSelected.addEventListener('click', event => {
        var letter = event.target.textContent;

        lettersSelected.style.opacity = '0.5';
        lettersSelected.style.pointerEvents = 'none';
        clickHandler(letter, letterElement);
    })
})

function clickHandler(letter, letterElement) {
    if (randomWord.includes(letter)) {
        updateWordDisplay(letter);
    } else {
        lives--;
        //update hangman
        if (lives === 0) {
            alert("Game Over! The word was " + randomWord);
        }
    }
}

function updateWordDisplay(letter) {
    var answerSection = document.getElementById("answer-section");
    var displayedWord = answerSection.textContent.split('');
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            displayedWord[i] = letter;
        }
    }
    answerSection.textContent = displayedWord.join('');

    if (displayedWord.includes('-') === false) {
        alert("You Guessed it!" + randomWord);
    }
}