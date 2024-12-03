import { Router } from 'express';
const route = Router();
import { paginaInicial, trataPost } from './src/controllers/homeController.js';
import { paginaInicial as _paginaInicial } from './src/controllers/contatoController.js';

// Rotas da home
route.get('/', paginaInicial);
route.post('/', trataPost);

// Rotas de contato
route.get('/contato', _paginaInicial);


export default route;
