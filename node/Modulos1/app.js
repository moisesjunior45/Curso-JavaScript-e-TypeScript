const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('João');
console.log(mod1);
console.log(p1);
// axios('https://pokeapi.co/api/v2/pokemon?limit=10')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e))

