// Valor por referência
// const nomes = ['Eduardo', 'Maria', 'Joana'];

const nomes = new Array('Eduardo', 'Maria', 'Joana');
const novo1 = [...nomes];
// const removido = nomes.pop();   // Com o comando shift vai fucionar ao contrário, tirando o primeiro elemento
nomes.push('João');     
nomes.push('Wallace');  // unshift - Adiciona um elemento no final
const novo2 = nomes.slice(1, -1);   // "Fatiar o Array" passando seus indices

// console.log(nomes);
// console.log(novo2);

// const nome = 'Moisés de Oliveira Araújo Júnior';
// const nomes2 = nome.split(' ');     // método divide uma string em uma matriz de substrings.
const nomes2 = [ 'Moisés', 'de', 'Oliveira', 'Araújo', 'Júnior' ];
const nome = nomes2.join(' ');      // método retorna um array como uma string.
console.log(nome);