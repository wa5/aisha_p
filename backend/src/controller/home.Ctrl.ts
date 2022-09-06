export const home_Get=(req:any,res:any)=>{
    res.render('home',{error:''})
}
export const home_Post=(req:any,res:any)=>{
    
    res.render('home')
}
export const home_Put=(req:any,res:any)=>{
    res.send('hello')
}
export const home_delete=(req:any,res:any)=>{
    res.send('hello')
}