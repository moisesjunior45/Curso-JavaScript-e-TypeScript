const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);
    // elemento.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    elemento.appendChild(textoCriado);
    div.appendChild(elemento);
}

container.appendChild(div);
