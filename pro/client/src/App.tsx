import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashbord from './app/pages/dashbord/Dashbord';
import Login from './app/pages/Login/Login';
import Moreinfo from './app/pages/moreinfo/Moreinfo';
import Register from './app/pages/Register/Register';

function App() {
  return (
    < >

<Router>
  <Routes>
  <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashbord' element={<Dashbord/>}/>
    <Route path='/moreinfo/:id' element={<Moreinfo/>}/>
  </Routes>
</Router>
    
    </>
  );
}

export default App;
