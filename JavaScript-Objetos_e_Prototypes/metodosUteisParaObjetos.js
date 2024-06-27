/*
Object.values - Só pega as chaves
Object.entries - retorna uma array dos próprios pares [chave, valor]
Object.getOwnPropertyDescriptor(o, 'prop') - retorna um descritor de propriedades para uma propriedade(writable, configurable, value, enumerable)
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/*const caneca = { 
    ...produto,
     material: 'porcelana'  
};*/     // copiando propriedades de um objeto, para outro objeto Utilizar o operador Spread é bem mais intuitivo

// outra maneira utilizando Object.assign
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// Pegando só as propriedades especificas
// const caneca = { nome: produto.nome, preco: produto.preco }    

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};

// Object.defineProperty(produto, 'nome', {
    //     writable: false,
    //     configurable: false,
    //     value: 'Qualquer outra coisa'
    // });
    // console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));     
    for (let [chave, valor] of Object.entries(produto)) {
        console.log(chave, valor);  
    }

// console.log(Object.values(produto));        
// console.log(Object.entries(produto)); 

