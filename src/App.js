
import React from "react";
import emailjs from '@emailjs/browser';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";

import Movies from "./components/movies/Movies";

import Navbar from "./components/Navbar/Navbar";

import Register from "./components/Registerform/Register";

import Home from "./components/Slider/Home";
import Booking from "./components/movies/Comp/Booking";
import Signup from "./components/Login/Signup";
import Payment from "./components/paymentpage/payment";
import ParentTest from "./components/Testing/parent";

const App =() =>{
  return  (
 <div>
<BrowserRouter>
<Navbar></Navbar>

<Routes>
  <Route>

  <Route path="/" element={<Home/>} />
  <Route path="/test" element={<ParentTest/>}/>
 
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/movies/*" element={<Movies/>}/>
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/booking" element={<Booking/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/register" element={<Register/>}/>
  </Route>
</Routes>


</BrowserRouter>

 </div>
 
    
  );
}

export default App;
