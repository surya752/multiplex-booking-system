import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar =() =>{

    const [isMobile, setIsMobile] = useState(false);

    return(
       
       <nav className="navbar">
           <p className="logo">Multiplex Booking System</p>
           <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=> setIsMobile(false)}
            >
          
               <Link to="/" className="home">
                   <li>Home</li>
               </Link>
               <Link to="/movies" className="movies">
                   <li>Movies</li>
               </Link>
               <Link to="/contact" className="contact">
                   <li>Contact</li>
               </Link>
               <Link to="/signup" className="signup">
                   <li>Login</li>
               </Link>

           </ul>
           <button className="mobile-menu-icon"
           onClick={()=>setIsMobile(!isMobile)}
           >
               {isMobile ?(
                   <i className="fas fa-times"></i>
               ): (
                <i className="fas fa-bars"></i>
            )}
           </button>

       </nav>
       
    )
};
export default Navbar;