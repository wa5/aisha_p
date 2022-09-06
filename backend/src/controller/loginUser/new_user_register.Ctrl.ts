import { TypedRequestBody } from "../../common/interfaces/common.interfaces";
import { Iregister_Post } from "./new_user_register.interface";
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
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if (!name || !email || !password)
    return res.render('register',{error:"Username ,emil and password are required."});    
  // check for duplicate usernames in the db

 User.find({ email: email }, async (err: any, data: any) => {
    if (data.length != 0) {
     // console.log("kk", err, data[0].password);
      return res.sendStatus(409);
    } else {
      try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        //store the new user
        const newUser = { name: name, email: email, password: hashedPwd };
        var userdta = new User(newUser);
        userdta.save();


        //await sendingMails(name, email);
        console.log("kio",userdta._id)
        const maxAge = 3 * 24 * 60 * 60;
        const token=jwt.sign({id:userdta._id},SECRT_KEY,{
          expiresIn: maxAge
        })
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
       // res.status(201).json({user:userdta,token:token})
         res.render('login',{error:''});
        
      } catch (err: any) {
        //console.log(err)
        res.status(500).json({ message: err.message });
      }
    }
  });
  // console.log(duplicate)
  // if (duplicate) return res.sendStatus(409); //Conflict
};
export const register_Put = (req: any, res: any) => {
  res.send("hello");
};
export const register_delete = (req: any, res: any) => {
  res.send("hello");
};
