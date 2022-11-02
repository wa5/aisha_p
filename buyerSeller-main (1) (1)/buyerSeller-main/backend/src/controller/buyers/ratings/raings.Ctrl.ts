var {RatingProducts}=require('../../../models')

export const ratingProducts_Get=async(req:any,res:any)=>{
    
    console.log(req.user)
    res.send('hello')
  
    
}
export const ratingProducts_Post=async(req:any,res:any)=>{
    
    console.log("ll",req.body)
    var ratingdata=new RatingProducts(
        {
    user_id:String,
    product_id:String,
    name:String,
    review:String,
    ratings:Number,
        
        })
        ratingdata.save()
    res.send('hello')
  
    
}