var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
var lives = 6;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

var randomWord = getRandomWord();
console.log(randomWord);
var answerSection = document.getElementById("answer-section");
var dashes = "-".repeat(randomWord.length);

answerSection.textContent = dashes;

var lettersSelected = document.querySelectorAll('.letter');

lettersSelected.forEach((letterElement) => {
    letterElement.addEventListener('click', event => {
        var letter = event.target.textContent.toLowerCase();
        console.log(letter);

        letterElement.style.opacity = '0.5';
        letterElement.style.pointerEvents = 'none';
        clickHandler(letter, letterElement);
    })
})

function clickHandler(letter, letterElement) {
    console.log("click handler activated " + letter);
    if (randomWord.includes(letter)) {
        console.log("letter is corret");
        updateWordDisplay(letter);
    } else {
        lives--;
        displayHangmanPart(lives);
        if (lives === 0) {
            setTimeout(() => {
                alert("Game Over! The word was " + randomWord);
                location.reload();
            }, 100);
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
        alert("You Guessed it! " + randomWord.toUpperCase());
    }
}