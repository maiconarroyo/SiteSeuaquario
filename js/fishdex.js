function fishDex(){
    const paragrafo = document.querySelector(".amonia-introduce");
    const background = document.querySelector(".main-background.-amonia");
    // Oculta o background e o parágrafo
    if (background) {
        background.style.display = "none"; // Oculta o background
    }
    if (paragrafo) {
        paragrafo.style.display = "none"; // Oculta a introdução
    }
}
