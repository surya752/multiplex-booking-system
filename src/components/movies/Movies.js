import React from "react"
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Comp/Home";

import CheckOut from "./Comp/CheckOut";
import Header from "./Comp/Header";
import Booking from "./Comp/Booking";

const Movies =() =>{

    return(
        <div>
       <div className="App">
      <Header />
      <Routes>
        <Route>
        <Route path="/" element={<Home/>} />

          <Route path="/booking" element={<Booking/>} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
        </div>
    )
};
export default Movies;