import React from "react";
import {Link} from "react-router-dom";
import CallBubble from "./CallBubble";

function Footer() {
    return (
        <footer>
          <CallBubble></CallBubble>
            <div className="container">
              <div className="summary" id="market">
                <h5>Market</h5>
                <Link to="/market/buy">Buy</Link>
                <Link to="/market/rent">Rent</Link>
              </div>
              <div className="summary" id="services">
                <h5>Services</h5>
                <Link to="/service?category=clothes&service=1">Clothes</Link>
                <Link to="/service?category=residential&service=1">Residential</Link>
                <Link to="/service?category=commercial&service=1">Commercial</Link>
              </div>
              <div className="summary" id="contact">
                <h5>Contact info</h5>
                <a href="mailto:info@jtcteam.ca" className="mb-0">info@jtcteam.ca</a>
                <a href="tel:+1 226 884 4911">+1 226 884 4911</a>
              </div>
              <div className="d-flex flex-column align-items-end" id="apps">
                <h4 className="text-end">Social media</h4>
                <div className="icons">
                  <a href="https://www.instagram.com/just.try.cleaning/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.facebook.com/Just-Try-Cleaning-110089588595379" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://www.youtube.com/@justtrycleaning/videos" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>               
                  <a href="https://www.tiktok.com/@just.try.cleaning?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>                 
                  <a href="https://www.snapchat.com/add/just.tryclean?share_id=y5AZ89t6vqQ&locale=en-GB" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-snapchat"></i> </a>                 
                </div>
              </div>
              <div id="copywrite">
                <p>Logo designed by LOFA</p>
                <p>Copywrite @ 2022 JTC inc. All rights are reserved.</p>
              </div>
              <div className="d-flex align-items-end justify-content-end" id="location">
                <p>Ontario, London</p>
              </div>
            </div>
        </footer>
    );
}

export default Footer;
