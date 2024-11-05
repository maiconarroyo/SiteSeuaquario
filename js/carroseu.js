const images = document.querySelectorAll('.figure-carroseu');
const titleElement = document.querySelector('.main-title.-h1Carroseu');
const subtitleElement = document.querySelector('main-subtitle.-pCarroseu');

const contents = [
    { title: 'Início 2017', subtitle: 'A história começou em 2017...' },
    { title: 'Canal Começo', subtitle: 'Primeiros passos do canal...' },
    { title: 'Eu e Diego', subtitle: 'Um encontro importante...' },
    { title: 'Adesivo', subtitle: 'O símbolo do nosso trabalho...' },
    { title: 'Camiseta', subtitle: 'Uma marca para lembrar...' },
    { title: 'Início do Curso', subtitle: 'A formação começa...' },
    { title: 'Logo do Canal', subtitle: 'A marca final do canal...' }
];

let currentIndex = 0;

function updateCarousel() {
    // Ajusta a posição das imagens
    images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Atualiza título e subtítulo
    titleElement.textContent = contents[currentIndex].title;
    subtitleElement.textContent = contents[currentIndex].subtitle;

    // Muda para a próxima imagem (ou volta para a primeira)
    currentIndex = (currentIndex + 1) % images.length;
}

// Intervalo para rodar o carrossel automaticamente a cada 3 segundos
setInterval(updateCarousel, 3000);