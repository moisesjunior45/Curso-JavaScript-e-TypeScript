// Escreva uma função que recebe um número e retorne o segunite
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = NaN
// Use a função com números de 0 a 100

function retornarNumero(numero) {
    if (typeof numero !== 'number') return NaN;

    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    if (!(numero % 3 === 0 && numero % 5 === 0)) return numero;
}
console.log(retornarNumero('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, retornarNumero(i))
}


