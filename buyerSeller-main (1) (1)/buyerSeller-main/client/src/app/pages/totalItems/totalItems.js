import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import {Avatar,Box,AppBar,Toolbar} from "@mui/material";
import {Link} from 'react-router-dom'
// import data from './Data/mock-data1.json';
import "./style.scss";

let PageSize = 10;

export default function App() {
  const dispatch = useDispatch();
  /////////////////////////////////////////////API/////////////////////////////

  const [List, setList] = useState([]);

  const isEmptyObject = (selector) => {
    return JSON.stringify(selector) === "{}";
  };

  useEffect(() => {
    dispatch({ type: "LISTED_ITEMS" });
  }, []);

  const all_Listed_Items = useSelector(
    (state) => state["AllListedItemsReducer"]["listedItems"]
  );
  // console.log("all_Listed_Items>>>>", all_Listed_Items);
  
  useEffect(() => {
    if (isEmptyObject(all_Listed_Items)) {
      return;
    } else {
      setList(all_Listed_Items.data);
    }
  }, [all_Listed_Items]);
  console.log("List in totla items", List);
  ////////////////////////////////////////////////////////////////////////////

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return List.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
var sno=0
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            
          <span style={{ color: "rgb(0, 97, 66)", fontWeight: 600,marginRight:"45%",fontSize:25 }}>
                {" "}
                Listed Items
              </span>
              
          </Toolbar>
        </AppBar>
      </Box>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Details</th>
            <th>Item Type</th>
            <th>Item Available From</th>
            <th>Item Available to</th>
            <th>Item Image</th>
          </tr>
        </thead>
        <tbody>
        
          {currentTableData.map((item, index) => {
            // console.log("item>>>>",index+1)
            

            return (
            <Link to='/'> <tr key={index}>
                <td> {index+1}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.from_date}</td>
                <td>{item.to_date}</td>
                <td>
                  {" "}
                  <Avatar
                    alt='Remy Sharp'
                    src={`${item.base_uri}${item.img_name}`}
                    sx={{ width: 56, height: 56 }}
                  />
                </td>
              </tr></Link > 
            );
          })}
        </tbody>
      </table>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={List.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
