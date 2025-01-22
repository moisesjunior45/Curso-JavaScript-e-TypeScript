import { Schema, model } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const LoginSchema = new Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

const LoginModel = model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push("Usuário não existe");
      return;
    }

    if (!bcryptjs.compareSync(this.body.senha, this.user.senha)) {
      this.errors.push("Senha inválida");
      this.user = null;
      return;
    }
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

    this.user = await LoginModel.create(this.body);
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push("Usuário já existe.");
  }

  valida() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) this.errors.push("Email inválido");

    if (this.body.senha.length < 3 || this.body.senha.length > 50) {
      this.errors.push("A senha precisa ter entre 3 e 50 caracteres.");
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      senha: this.body.senha,
    };
  }
}

export { Login };
