import React from 'react';
import {Grid,Paper,Avatar,Button} from '@mui/material'
import './ListingSummary.css'
import { useSelector } from 'react-redux';


const ListingSummary=()=>{

    const itemList=useSelector((state:any)=>state.ListingReducer.listItems)
    console.log('itemList',itemList)
const handleSubmit=()=>{
    alert('Hello')
}
    return(

        <div className='mainDiv'><Paper className='paper' elevation={24} >
           
            <Grid container spacing={2}>
            <Grid item xs={12}><div className='heading'>Item Summary</div></Grid>
                 <Grid item xs={6}>
<span className='subHeading'>Item Details</span>
                 </Grid>
                 <Grid item xs={6}>
                 {itemList.itemDetails}
                 </Grid>
                 <Grid item xs={6}>
                 <span className='subHeading'>Item Type</span>
                 </Grid>
                 <Grid item xs={6}>
                 {itemList.ItemType}
                 </Grid>
                 <Grid item xs={6}>
                 <span className='subHeading'>Item From Date</span>
                 </Grid>
                 <Grid item xs={6}>
                 {/* <span className='subHeading'>{itemList.itemFromvalue}</span> */}
                 </Grid>
                 <Grid item xs={6}>
                 <span className='subHeading'>To Date</span>
                 </Grid>
                 <Grid item xs={6}>
                 {/* <span className='subHeading'>{itemList.itemToValue}</span> */}
                 </Grid>
                 <Grid item xs={6}>
                 <span className='subHeading'>Item Picture</span>
                 </Grid>
                 <Grid item xs={6}>

                 <Avatar
              alt='Remy Sharp'
              src={itemList.itemPictureURL}
              sx={{ width: 150, height: 150 }}
              variant='rounded'
            />

                 </Grid>
            </Grid>
            <Grid xs={12}> <Button
            variant='contained'
            onClick={handleSubmit}
            size='large'
            fullWidth={true}
          >
            <span style={{ color: "#006142", fontWeight: 600 }}>Submit</span>
          </Button></Grid>
            </Paper></div>
    )
}
export default ListingSummary