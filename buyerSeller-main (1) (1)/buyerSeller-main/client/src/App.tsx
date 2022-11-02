import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbord from "./app/pages/dashbord/Dashbord";
import Login from "./app/pages/Login/Login";
import Moreinfo from "./app/pages/moreinfo/Moreinfo";
import Register from "./app/pages/Register/Register";
import { Roles } from "./app/pages/Roles/components/Roles";
import SignUp from "./app/pages/signup/SignUp";
import Listing from "./app/pages/Listing/Listing";
import ListingSummary from "./app/pages/Listing/ListingSummary";
import TotalItems from './app/pages/totalItems/totalItems'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/roles' element={<Roles />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashbord />} />
          <Route path='/facebook/moreinfo/:id' element={<Moreinfo />} />
          <Route path='/google/moreinfo/:id' element={<Moreinfo />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/listing-summary' element={<ListingSummary />} />
          <Route path='/total-items' element={<TotalItems/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
