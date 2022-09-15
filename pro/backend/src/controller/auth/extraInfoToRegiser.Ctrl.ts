import { CLIENT_URL } from "../../../config/client.config";

export const extraInfoToRegiser_Get=(req:any,res:any)=>{
    
        console.log("====1like111")
              
        res.redirect(`${CLIENT_URL}moreinfo`);
    }