module.exports = (req:any, res:any, next:any) => {
  if (req.session.isAuth) {
    next();
  } else {
    req.session.error = "You have to Login first";
    res.redirect("/api/login");
  }
};
