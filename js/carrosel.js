const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const titleElement = document.querySelector(".main-title.-h1Carrosel");
const suubTitleElement = document.querySelector(".main-subtitle.-pCarrosel");

const contents = [
    { title: 'Início 2017', subtitle: 'Tudo começou em 2017 quando, ao enfrentar dificuldades em cuidar de um peixe betta, decidi criar um canal para ajudar pessoas com dificuldades no Aquarismo.' },
    { title: 'Trabalho em Família', subtitle: 'Mesmo sem nenhuma experiência em criação de conteúdo, edição de vídeo ou qualquer outra área, comecei com a ajuda da minha esposa, que me apoia na criação de conteúdo para o canal.' },
    { title: 'Canal começa a Crescer', subtitle: 'Apesar da concorrência de muitos canais já estabelecidos e reconhecidos, o nosso canal começou a crescer e aumentar o número de inscritos, superando desafios e expectativas. Decidimos diversificar os temas dos vídeos e, mesmo assim, conseguimos manter um crescimento constante.' },
    { title: 'Uma empresa que acreditou no nosso Sonho', subtitle: 'Decidimos enviar um e-mail a uma grande empresa, mesmo sendo um canal pequeno, solicitando seu apoio. Para nossa surpresa, essa iniciativa gerou uma amizade e um suporte que fizeram toda a diferença. A MBreda, acreditando em nosso projeto, nos proporcionou a oportunidade de criar ainda mais conteúdo com seu apoio.' },
    { title: 'Nosso Primeiro Evento', subtitle: 'Com o apoio de algumas empresas, decidimos realizar nosso primeiro evento com o objetivo de divulgar o hobby e apoiar nossos colegas aquaristas.' },
    { title: 'Ganhamos nossa Marca', subtitle: 'Com o apoio do nosso amigo Diego, recebemos uma arte que se tornou nossa marca registrada desde então.' },
    { title: 'Criamos nosso Curso', subtitle: 'Com o intuito de compartilhar conhecimento com todos, criamos nosso curso de aquarismo a um preço extremamente acessível, oferecendo material de alta qualidade. Com a receita gerada pelo curso, iniciamos o desenvolvimento do nosso site e a produção de novos vídeos.' }
];

let idx = 0;

function carossel() {
    img.forEach((image) => {
        image.classList.remove("selecionado");
        image.style.border = ""; 
    });
     
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    img[idx].classList.add(".selecionado");
    img[idx].style.border ="5px solid transparent";
    img[idx].style.borderImage = "linear-gradient(45deg, #FFD700, #FFCC00, #FFB300, #FFCC00, #FFD700) 3";

    imgs.style.transform = `translateX(${-idx * 390}px)`;

    titleElement.textContent = contents[idx].title;
    suubTitleElement.textContent = contents[idx].subtitle;
}

setInterval(carossel, 1800);
