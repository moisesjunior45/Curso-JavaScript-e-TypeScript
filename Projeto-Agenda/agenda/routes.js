import { Router } from "express";
const route = Router();
import { index } from "./src/controllers/homeController.js";
import { login, indexLogin, register, logout } from "./src/controllers/loginController.js";

// Rotas da home
route.get("/", index);

// Rotas de login
route.get("/login/index", indexLogin);
route.post("/login/register", register);
route.post("/login/login", login);
route.get("/login/logout", logout);

export default route;
