const images = document.querySelectorAll('.figure-carroseu');
const titleElement = document.querySelector('.main-title.-h1Carroseu');
const subtitleElement = document.querySelector('.main-subtitle.-pCarroseu');

const contents = [
    { title: 'Início 2017', subtitle: 'Tudo começou em 207 que ao tem dificuldades em cuidar de um peixe betta decido criar um canal para ajudar as pesoas que estão com dificuldades no Aquarismo' },
    { title: 'Trabalho em Família', subtitle: 'Mesmo sem nenhuma experiência em criação de conteúdo, edição de vídeo ou qualquer outra área, comecei com a ajuda da minha esposa, que me apoia na criação de conteúdo para o canal.' },
    { title: 'Canal começa a Crescer', subtitle: 'Apesar da concorrência de muitos canais já estabelecidos e reconhecidos, o nosso canal começou a crescer e aumentar o número de inscritos, superando desafios e expectativas. Decidimos diversificar os temas dos vídeos e, mesmo assim, conseguimos manter um crescimento constante..' },
    { title: 'Uma empresa que acreditou no nosso Sonho', subtitle: 'Decidimos enviar um e-mail a uma grande empresa, mesmo sendo um canal pequeno, solicitando seu apoio. Para nossa surpresa, essa iniciativa gerou uma amizade e um suporte que fizeram toda a diferença. A MBreda, acreditando em nosso projeto, nos proporcionou a oportunidade de criar ainda mais conteúdo com seu apoio.' },
    { title: 'Nosso Primeiro Evento', subtitle: 'Com o apoio de algumas empresas, decidimos realizar nosso primeiro evento com o objetivo de divulgar o hobby e apoiar nossos colegas aquaristas.' },
    { title: 'Ganhamos nossa Marca', subtitle: '"Com o apoio do nosso amigo Diego, recebemos uma arte que se tornou nossa marca registrada desde então.' },
    { title: 'Criamos nosso Curso', subtitle: 'Com o intuito de compartilhar conhecimento com todos, criamos nosso curso de aquarismo a um preço extremamente acessível, oferecendo material de alta qualidade. Com a receita gerada pelo curso, iniciamos o desenvolvimento do nosso site e a produção de novos vídeos.' }
];

let currentIndex = 0;
let moveCount = 0;  
let direction = 'left';  

function updateCarousel() {
    const displacement = direction === 'right' ? -110 : 110;

   
    images.forEach((img) => {
        img.style.transition = 'transform 1s ease';  
        img.style.transform = `translateX(${displacement * currentIndex}%)`; 
    });

    titleElement.textContent = contents[currentIndex].title;
    subtitleElement.textContent = contents[currentIndex].subtitle;

    
    if (direction === 'left') {
        currentIndex++;
        if (currentIndex >= 4) { 
            direction = 'right'; 
            currentIndex = 0; 
        }
    } else if (direction === 'right') {
        currentIndex++;
        if (currentIndex >= 4) { 
            direction = 'left'; 
            currentIndex = 0; 
        }
    }
}


setInterval(updateCarousel, 3000);
