// map - chama uma função callback recebida por parâmetro para cada elemento do Array original,
// em ordem, e constrói um novo array com base nos retornos de cada chamada.
// Sempre terá o mesmo tamanho do Array original

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com "a"

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}) );
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})
// console.log(nomes);
// console.log(idades);
console.log(comIds);
console.log(pessoas);