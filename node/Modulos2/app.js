const Cachorro = require('./Z/mod2');
const c1 = new Cachorro('Dog');
c1.latir();

const path = require('path');
console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
