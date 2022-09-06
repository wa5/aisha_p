var { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRT_KEY = "USERAPIKEY";
export const Login_Get = (req: any, res: any) => {
  res.render("login",{error:''});
};
export const login_Post = async (req: any, res: any) => {
  try {
   

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
  
    var user = await User.find({ email: email });

    console.log("99", user);
    if (!user) {
   
     
      return res.redirect("login",{error:''});
    }
    console.log(user[0].password)
    const matchPassword = await bcrypt.compare(password, user[0].password);
    console.log("g,", matchPassword);
    if (!matchPassword) {
      return res.render('login',{error:'invalid credentials pass'});
    }
   
    const maxAge = 3 * 24 * 60 * 60;
    const token = jwt.sign({id: user[0]._id }, SECRT_KEY,{
        expiresIn: maxAge
      });
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.setHeader('Authorization', token);
   //res.status(201).json({ user: user, token: token });

    res.render('home')
  } catch (error: any) {

    res.render("login",{error:'invalid credentials1'});
  }

  //    await User.find({email:email},(err:any,data:any)=>{

  //         if(data.length===0){
  //             console.log("uu",err,data)
  //             res.render('login')
  //         }else{
  //             console.log("uu1",err,data)
  //             res.render('home')
  //         }
  //     }).clone().catch(function(err:any){ console.log(err)})
  // res.send('hello')
};
