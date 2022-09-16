import { CLIENT_URL } from "../../../config/client.config";
var {User}=require('../../models')
export const extraInfoToRegiser_Get=async(req:any,res:any)=>{
    
        console.log("====1like111",req.params.id)
        var conflic= await  User.find({ fb_id:req.params.id })
        console.log("email already exits",conflic[0]);
        res.redirect(`${CLIENT_URL}moreinfo`);
    }
    export const extraInfoToRegiser_Post=async(req:any,res:any)=>{
    
        console.log("====1like111",req.params.id)
        var conflic= await  User.find({ fb_id:req.params.id })
        console.log("email already exits",conflic[0]);
        res.redirect(`${CLIENT_URL}`);
    }