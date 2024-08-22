const nome = 'Moisés';
const sobrenome = 'Oliveira';

/*const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(module.exports);*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.Pessoa = Pessoa;
exports.outraCoisa = 'Outra coisa';