var { User } = require("../../models");
export const User_Get=async (req:any,res:any)=>{
    var user = await User.find({ });

    res.send(user)
      
    
}