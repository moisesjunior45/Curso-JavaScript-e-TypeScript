// argumentos que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao2(2, undefined, 20);

// Parâmetros com objetos
function funcao3 ({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Moisés', sobrenome: 'Oliveira', idade: 19};
funcao3(obj);   

// Parâmetros com Arrays
function funcao4 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let array = ['Moisés', 'Oliveira', 19];
funcao4(array);

// Exemplo Real
const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);