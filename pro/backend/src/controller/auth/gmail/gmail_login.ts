import { TypedRequestBody } from "../../../common/interfaces/common.interface";
import  sendMail  from "../../../helper/mailer/sendmail";
import { Iregister_Post } from "./gmail.interface";
var { User } = require("../../models");
import { Response } from "express";
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const SECRT_KEY="USERAPIKEY"
export const register_Get = (req: any, res: any) => {
  res.render("register",{error:''});
};
export const new_user_register_Post = async (
  req: TypedRequestBody<Iregister_Post>,
  res: Response
) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password;

  if (!fname || !email || !password)
    return res.render("register",{error:'Username ,emil and password are required.'});
      
  // check for duplicate usernames in the db
  var conflic= await  User.find({ email: email })
  console.log("email already exits",conflic!=0);
  if (conflic[0]) {
    console.log("email already exits");
  res.render("register",{error:'email already exits'});
}else{
      try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        //store the new user
        const newUser = { fname: fname,lname: lname, email: email, password: hashedPwd };
        var userdta = new User(newUser);
        userdta.save();


        await sendMail(fname, email);
        
        const maxAge = 3 * 24 * 60 * 60;
        const token=jwt.sign({id:userdta._id},SECRT_KEY,{
          expiresIn: maxAge
        })
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
       // res.status(201).json({user:userdta,token:token})
         res.render('login',{error:''});
        
      } catch (err: any) {
        res.render("register",{error:'user not registerd try again'});
      }
    }

  // console.log(duplicate)
  // if (duplicate) return res.sendStatus(409); //Conflict
};
export const register_Put = (req: any, res: any) => {
  res.send("hello");
};
export const register_delete = (req: any, res: any) => {
  res.send("hello");
};