import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



const Footer =() =>{
    return(
        <footer>
        <div className="footer-content">
          <strong data-testid="para"></strong>
            <h3>Multiplex Booking System</h3>
            
            <ul className="socials">
            <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a  href="https://www.instagram.com/?hl=en"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">Multiplex Booking System | Batch-2</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    )
};
export default Footer ;