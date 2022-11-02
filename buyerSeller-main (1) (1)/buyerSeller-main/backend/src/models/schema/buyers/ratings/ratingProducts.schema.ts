require('../../../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var ratingProductsStructure=new Schema({
    user_id:String,
    product_id:String,
    name:String,
    review:String,
    ratings:String,
},{
    timestamps: true 
  })

module.exports=mongoose.model('ratingsProducts',ratingProductsStructure)




