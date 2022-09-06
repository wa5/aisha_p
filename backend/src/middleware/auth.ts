const jwt = require('jsonwebtoken');
var { User } = require("../models");
const requireAuth = (req:any, res:any, next:any) => {
  const token = req.cookies.jwt;
  //console.log("mytokrn",token);
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'USERAPIKEY', (err:any, decodedToken:any) => {
      //console.log("mytokrn1",token);
      if (err) {
       // console.log(err.message);
        res.render('login',{error:err});
      } else {
        //console.log(decodedToken);
        next();
      }
    });
  } else {
    res.render('login',{error:'logn first pls'});
  }
};

// check current user
const checkUser = (req:any, res:any, next:any) => {
  const token = req.cookies.jwt;
  // console.log("jjj2",req.headers)
  //var part = authorization.split(' ');
  if (token) {
    jwt.verify(token, 'USERAPIKEY',  async (err:any, decodedToken:any) => {
     // console.log("jjj1",decodedToken.id)
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        // console.log("jjj",user)
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

// admin middleware
const isAdmin = (req:any, res:any, next:any) =>{
  //console.log("hh",res.locals.user.role)
  if (res.locals.user.role === 0){
      return res.render('home');
  }
  next();

}
module.exports = { requireAuth,checkUser,isAdmin };