import { Login } from "../models/LoginModel.js";

export function indexLogin(req, res) {
  res.render("login");
}

export async function register(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      return req.session.save(() => res.redirect("/login/index"));
    }

    req.flash("success", "Seu usuário foi criado com sucesso.");
    return req.session.save(() => res.redirect("/login/index"));
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
}
