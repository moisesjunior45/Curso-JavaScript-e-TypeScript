export function middlewareGlobal(req, res, next) {
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  next();
}

export function outroMiddleware(req, res, next) {
  next();
}

export function checkCsrfError(err, req, res, next) {
  if (err) {
    return res.render("404");
  }

  next();
}

export function csrfMiddleware(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}
