
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Simulando Unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// Simulando push
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');
console.log(nomes);


// Simulando pop
// const removidos = nomes.splice(-1, 1);

// Simulando shift
// const removidos = nomes.splice(0, 1);