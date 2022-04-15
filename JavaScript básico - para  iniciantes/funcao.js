// function soma(x = 0, y = 0) {
//     const resutado = x + y;
//     return resutado;
// }

// console.log(soma(4,2));

//  Outras maneiras de declaras funções

// const raizQuadrada = function (n) {
//     return n ** 0.5;

// };  //Sempre que a função tiver atribuição "=" no final adiciona-se ;

// console.log(raizQuadrada(9))
// console.log(raizQuadrada(16))
// console.log(raizQuadrada(25))

// Arrow function
const raizQuadrada = n => n ** 0.5;
console.log(raizQuadrada(9))
console.log(raizQuadrada(16))
console.log(raizQuadrada(25))