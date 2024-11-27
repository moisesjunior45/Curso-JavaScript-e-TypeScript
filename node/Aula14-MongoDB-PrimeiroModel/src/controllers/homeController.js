import { HomeModel } from "../models/HomeModel.js";

// Criando dados na collection
// HomeModel.create({
//   titulo: 'Outro título',
//   descricao: 'Outra descrição'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

// Buscando dados do banco
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

export function paginaInicial(req, res) {
  res.render('index');
  return;
}

export function trataPost(req, res) {
  res.send(req.body);
  return;
}
