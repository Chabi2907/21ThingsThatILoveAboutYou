const slides = [
    {
        title: 'Seu Sorriso',
        number: 1
    },
    {
        title: 'Seus Olhos',
        number: 2
    },
    {
        title: 'Sua Boca',
        number: 3
    },
    {
        title: 'Seus Cabelos',
        number: 4
    },
    {
        title: 'Sua Barriguinha',
        number: 5
    },
    {
        title: 'Seus Pezinhos',
        number: 6
    },
    {
        title: 'Suas Maozinhas',
        number: 7
    },
    {
        title: 'Seus Bracinhos',
        number: 8
    },
    {
        title: 'Suas Orelhinhas',
        number: 9
    },
    {
        title: 'Sua Risada',
        number: 10
    },
    {
        title: 'Seu Humor',
        number: 11
    },
    {
        title: 'O jeito que você cozinha',
        number: 12
    },
    {
        title: 'O jeito que você vê a vida',
        number: 13
    },
    {
        title: 'A maneira que você é esforçada',
        number: 14
    },
    {
        title: 'O jeito que você é esperta',
        number: 15
    },
    {
        title: 'Como você é organizada',
        number: 16
    },
    {
        title: 'A maneira que você é talentosa',
        number: 17
    },
    {
        title: 'O doce som da sua voz',
        number: 18
    },
    {
        title: 'Seu gosto musical eclético',
        number: 19
    },
    {
        title: 'Seu abraço apertado depois de um longo dia sem nos vermos',
        number: 20
    },
    {
        title: 'As músicas que você inventa',
        number: 21
    },
    {
        title: 'A maneira que você se importa com as pessoas. Sua espontaneidade. Quando você se deita encolhida no meu peito. Os seus beijos calorosos. O calor do seu corpo. A textura da sua pele. Seus lábios macios. O jeito que você estica as pernas pra eu poder colocar suas meias. Quando você deita no sofá com sono.',
        number: '∞'
    },
    {
        title: 'Você.',
        number: '∞'
    }
];

const mainTitle = document.getElementById("mainText");
const number = document.querySelector(".number");
const text = document.querySelector(".text");
const container = document.querySelector(".mainContainer");

const rightButton = document.querySelector(".changeSlideRight");
const leftButton = document.querySelector(".changeSlideLeft");

let currentSlide = 0;

function renderSlide() {

    const slide = slides[currentSlide];

    number.textContent = slide.number;
    text.textContent = slide.title;

    // Altera o título principal
    if (currentSlide >= 21) {
        mainTitle.textContent = "Achou que eram só 21 coisas?";
    } else {
        mainTitle.textContent = "21 COISAS QUE EU AMO EM VOCÊ";
    }

    // Ajusta o tamanho do card para o slide longo
    if (currentSlide === 21) {
        container.style.height = "550px";
    } else {
        container.style.height = "400px";
    }

    // Recria o efeito arco-íris
    createRainbowTitle();
}

rightButton.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    renderSlide();

});

leftButton.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    renderSlide();

});

// Carrega o primeiro slide
renderSlide();