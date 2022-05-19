// ... rest, ... spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, dois,tres,... resto] = numeros;   //...(Nome da variavel) Pega o resto do que não foi utilizado.
// console.log(um, tres, cinco, sete);

//                     0          1         2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// console.log(numeros[1][2]);         //Exemplo para acessar o número 6
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);