import { Router } from 'express';
const route = Router();
import { index } from './src/controllers/homeController.js';
import { indexLogin, register } from './src/controllers/loginController.js';

// Rotas da home
route.get('/', index);

// Rotas de login
route.get('/login/index', indexLogin)
route.post('/login/register', register)


export default route;
