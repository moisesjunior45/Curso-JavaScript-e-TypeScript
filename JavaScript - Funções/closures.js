function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Moisés');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());