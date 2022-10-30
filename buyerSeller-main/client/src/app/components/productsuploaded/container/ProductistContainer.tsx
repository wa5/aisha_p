
import React, { useEffect, useState } from 'react'
interface IProductsList{}




export const  ProductistContainer:React.FC<IProductsList>=(props) =>{
let [data,setData]=useState([])
    useEffect(() => {
   (async()=>{
    var data3=await fetch('http://localhost:8001/api/upload-products')
  var data2=await data3.json()
  console.log(data2)
  setData(data2) 
   })()
      
    },[])
    let Imgcomponent=()=>{
        return <>{
            data.map((a:any)=>{return <>
            <img height='200px' src={`${a.base_uri}${a.img_name}`}/>
            </>})
        }</>
    }    
  return (<>
<Imgcomponent/>
  <div> ProductistContainer</div>
  </>
    
  )
}