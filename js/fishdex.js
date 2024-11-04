function fishDex(){
    const paragrafo = document.querySelector(".main-section.-fishdextop");
    const background = document.querySelector(".main-background.-amonia");
    const cardDiv = document.querySelector(".main-section.-fishdex");

    paragrafo.style.display= 'none';
    background.style.display= 'none';
    cardDiv.style.display='flex';
}

function virar(elemento){
    const frente = document.querySelector(".fishdex-card")
    const vers = document.q
    elemento.classList.toggle(".fishdex-card.-verso")
}