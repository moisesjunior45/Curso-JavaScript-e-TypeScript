export function middlewareGlobal(req, res, next) {
  if (req.body.cliente) {

    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`);

    console.log();

  }
  next();
}

export function outroMiddleware(req, res, next) {
  next();
}
