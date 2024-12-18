function hidem() {
    const botomCalculator = document.querySelector('.calcular-amonia');
    const calcularDiv = document.querySelector('.main-amonia');
    const betaimg = document.querySelector('.beta-img');
    const amoniaBackGround = document.querySelector('.main-background.-amonia')
    calcularDiv.style.display = 'none';
    botomCalculator.style.display = 'flex';
    betaimg.style.display= 'none';
    amoniaBackGround.style.display='none'
}

function amonia() {
    const amoniaInput = document.querySelector('input[name="amonia"]');
    const phInput = document.querySelector('input[name="ph"]');
    const temperaturaInput = document.querySelector('input[name="temperatura"]');

    let amoniaTotal = parseFloat(amoniaInput.value);
    let ph = parseFloat(phInput.value);
    let temperatura = parseFloat(temperaturaInput.value);

    if (isNaN(temperatura) || isNaN(ph) || isNaN(amoniaTotal)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    function calcularPK(temperatura) {
        return 0.09018 + (2729.92 / (273.15 + temperatura));
    }

    const pK = calcularPK(temperatura);
    const fracaoToxica = 1 / (1 + Math.pow(10, (pK - ph)));
    const amoniaToxica = amoniaTotal * fracaoToxica ;

    const resultadoDiv = document.getElementById('resultado');
    const resultadoTexto = resultadoDiv.querySelector('.main-subtitle.-resultado');
    resultadoDiv.style.display = 'block';

    if (amoniaToxica <= 0.018) {
        resultadoDiv.style.backgroundColor = '#4CAF50';
        resultadoTexto.style.color = 'white';
        resultadoTexto.textContent = `Níveis de Amônia Seguros Amônia Tóxica ${amoniaToxica.toFixed(3)}`;
    } else if (amoniaToxica <= 0.039) {
        resultadoDiv.style.backgroundColor = 'yellow';
        resultadoTexto.style.color = 'black';
        resultadoTexto.textContent = `Cuidado! Níveis de Amônia Moderado Amônia Tóxica ${amoniaToxica.toFixed(3)}`;
    } else {
        resultadoDiv.style.backgroundColor = 'red';
        resultadoTexto.style.color = 'white';
        resultadoTexto.textContent = `Níveis de Amônia Críticos!! Amônia Tóxica ${amoniaToxica.toFixed(3)}`;
    }
}
