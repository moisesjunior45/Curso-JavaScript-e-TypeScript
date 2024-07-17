const nome = 'Moisés';
const sobrenome = 'Oliveira';
const idade = 21;

export default function soma (x,y) {
    return x + y;
}

export { nome, sobrenome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}