require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type: Number,
        default: 0,//customer 1 admin 2 super admin
    }
},{
    timestamps: true
  })

module.exports=mongoose.model('userRegister',userStructure)






// class Human{
//     eyes:string
//     nose:string
//     constructor({eyes,nose}){
// this.eyes=eyes
// this.nose=nose
//     }
// }

// var akshy=new Human({eyes:'two',nose:'two'})