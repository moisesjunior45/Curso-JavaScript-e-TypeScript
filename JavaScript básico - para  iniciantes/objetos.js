// const pessoa1 = {
//     nome: 'Moisés',
//     sobrenome: 'Oliveira',
//     idade: 19
// };

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome,   //Também pode ser assim de uma forma abreviada
//         sobrenome:sobrenome,
//         idade:idade
//     };
// }

// const pessoa1 = criaPessoa('Moisés', 'Oliveira', 19);
// const pessoa2 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa3 = criaPessoa('João', 'Silva', 31);
// const pessoa4 = criaPessoa('Rafael', 'Gomes', 32);
// const pessoa5 = criaPessoa('Lucas', 'Santos', 29);
// console.log(pessoa1.nome, pessoa2.nome)

const pessoa1 = {
    nome: 'Moisés',
    sobrenome: 'Oliveira',
    idade: 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é: ${this.idade}.`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();