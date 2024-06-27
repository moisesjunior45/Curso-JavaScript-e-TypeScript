//  Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
console.log(`O maior número é ${maiorNumero(2,3)}`);

// Código refatorado (melhorado)
const maiorNumero2 = (numero1,numero2) => numero1 > numero2 ? numero1 : numero2;
console.log(`O maior número é ${maiorNumero2(10,3)}`);