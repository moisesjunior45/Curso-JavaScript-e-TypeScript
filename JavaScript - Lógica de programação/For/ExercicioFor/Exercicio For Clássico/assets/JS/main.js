const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
// const p = document.createElement('p');
// const footer = document.createElement('footer');
// const section = document.createElement('section');

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}