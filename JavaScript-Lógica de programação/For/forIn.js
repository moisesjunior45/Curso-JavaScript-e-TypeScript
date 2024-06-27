// Exemplo com Objetos
const pessoa = {
    nome: 'Moisés',
    sobrenome: 'Oliveira',
    idade: 19
};

// For in -> lê os indices ou chaves do objeto 
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// Exemplo com Array
// const frutas = ['Pêra', 'Maçã', 'Uva'];

//     for(let indice in frutas) {
//         console.log(frutas[indice]);
//     }