import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
