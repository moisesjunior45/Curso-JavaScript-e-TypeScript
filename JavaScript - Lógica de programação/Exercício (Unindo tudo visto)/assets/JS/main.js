// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Testando se o peso e a altura são válidos
    if (peso== '' || altura== '') {
        imprimirResultado('Existem campos que não foram preenchidos', false);
        return;
    }

    else if (isNaN(peso) || isNaN(altura)) {
        imprimirResultado('Há valores informados que não são números', false);
        return;
    } 

    else if (peso >597 || peso <20) {
        imprimirResultado('Peso inválido', false);
        return;
    }
    else if (altura >2.30 || altura < 1.30) {
        imprimirResultado('Altura inválida', false);
        return;
    }

    const imc = gerarImic(peso, altura);
    const nivelImc = gerarNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    imprimirResultado(msg, true);
});


function gerarImic(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function gerarNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) { return nivel[5]; }

    if (imc >= 34.9) { return nivel[4]; }

    if (imc >= 29.9) { return nivel[3]; }

    if (imc >= 24.9) { return nivel[2]; }

    if (imc >= 18.9) { return nivel[1]; }

    if (imc < 18.9) { return nivel[0]; }
}

function criarParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function imprimirResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const paragrafo = criarParagrafo();

    if(isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }
    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo)
}
