const mainText = document.getElementById("mainText");

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];

let currentColor = 0;
let spans = [];

function createRainbowTitle() {

    const text = mainText.textContent;

    mainText.innerHTML = text
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

    spans = mainText.querySelectorAll("span");
}

function rainbowText() {

    spans.forEach((span, index) => {
        span.style.color = colors[(index + currentColor) % colors.length];
    });

    currentColor++;

    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}

createRainbowTitle();

setInterval(rainbowText, 200);