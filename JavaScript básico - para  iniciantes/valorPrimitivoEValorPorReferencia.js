/*
 Primitivos (imutáveis) - String, number, boolean, undefined,
 null (bigint, Symbol) - valores copiados

 Referência (mutável) - array, object, function - Passados por referência
*/
/* let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
a.push('Luiz');
console.log(a, c); */

const a = {
    nome: 'Moisés',
    sobrenome: 'Oliveira'
};

const b = a;   
a.nome = 'João';
console.log(a);
console.log(b);