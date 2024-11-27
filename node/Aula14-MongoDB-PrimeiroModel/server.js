import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";
import routes from "./routes.js";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { middlewareGlobal } from "./src/middlewares/middleware.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectei a base de dados");
    app.emit("pronto");
  })
  .catch(e => console.log(e));

app.use(urlencoded({ extended: true }));

app.set("views", resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
