var hangmanParts = [
    "../assets/right-leg.svg",
    "../assets/left-leg.svg",
    "../assets/right-hand.svg",
    "../assets/left-hand.svg",
    "../assets/body.svg",
    "../assets/head.svg",
];

var classNames = [
    "right-leg",
    "left-leg",
    "right-hand",
    "left-hand",
    "body",
    "head"
];

function displayHangmanPart(index) {
    var img = document.createElement("img");
    img.src = hangmanParts[index];
    img.className = classNames[index];
    var hangmanContainer = document.getElementById("hang");
    hangmanContainer.appendChild(img);
}


