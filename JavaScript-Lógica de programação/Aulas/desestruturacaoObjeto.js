const pessoa = {
    // nome: 'Moisés',
    sobrenome: 'Oliveira',
    idade:19,
    endereco: {
        rua: '1 Travessa da Galileia',
        numero: 60
    }
};

//  Atribuição via desestruturação
// const { nome,  sobrenome } = pessoa;
// console.log(nome, sobrenome);

// const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);

const { nome, sobrenome, ...resto } = pessoa;
console.log(resto);