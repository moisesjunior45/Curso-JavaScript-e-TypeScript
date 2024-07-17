import {  nome, sobrenome, idade, soma, Pessoa } from './modulo1';
// Outras maneiras de importar
// import * as Modulo from './modulo1';
// import qualquerNome from './modulo1';   // importando o export default(padrão)


console.log(nome, sobrenome, idade);
console.log(soma(5,6));

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1);