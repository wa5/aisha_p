import { UploadedFile } from "express-fileupload"
const {SellerUploadProducts}=require('../../../models')
const path=require('path')
export const uploadProducts_Post=async(req:any,res:any)=>{
    products_uploads(req,res)
    console.log('ll',req.body)
        res.send('jj');
        
    }

    const products_uploads=(req:any,res:any)=>{
       
        let images;
       
        let uploadPath2
        let seller_id=req.body.seller_id
       let name=req.body.name
       let type=req.body.type
       let category=req.body.category
       let discription=req.body.discription
       let from_date=req.body.from_date
       let to_date=req.body.to_date
       let base_uri=req.body.base_uri
       let img_name=req.body.img_name

        //let title=req.body.title
       // let discription=req.body.discription
       // let sub_categary=req.body.sub_categary
        const mypath=path.join(__dirname, '../../../public')
        console.log("ppppppp",mypath)
        //path.join(__dirname, 'src/public')
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log(req.files)
          return res.status(400).send('No files were uploaded.');
        }
        
      
      images = req.files.thumbnail as UploadedFile
     
      uploadPath2 = mypath + '/images/' + images.name;
      let thumbnail=images.name
      console.log(thumbnail)
      images.mv(uploadPath2, function(err) {
        if (err){
            console.log(err)
        }
       
          //return res.status(500).send(err);  
      });
      var moviedata=new SellerUploadProducts(
        {
            seller_id:seller_id,
            name:req.body.name,
       type:req.body.type,
        category:req.body.category,
       discription:req.body.discription,
       from_date:req.body.from_date,
       to_date:req.body.to_date,
       base_uri:'http://localhost:8001/images/',
       img_name:thumbnail,
        })
      moviedata.save()
     res.send('done');
      }