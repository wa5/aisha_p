export const Logout_Get = (req: any, res: any) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.render("login",{error:''});
  };