
// Criação de Objeto de forma literal
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// console.log(pessoa1['nome']); // Notação [] deixa o objeto mais dinamico

// Criação de Objeto com construtor
const pessoa2 = new Object();
pessoa2.nome =  'Luiz';
pessoa2.sobrenome = 'Otávio';
pessoa2.idade = 30;
pessoa2.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa2) {
    // console.log(pessoa2[chave]);
}


// Factory functions | Constructor functions | Classes
// Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this);
}

// new criar um {} <- this -> this
const p2 = new Pessoa('Moisés', 'Júnior');
p2.nome = 'Outra coisa';
const p3 = new Pessoa('Maria', 'Clara');
console.log(p2);
console.log(p3); 