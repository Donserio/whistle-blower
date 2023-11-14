import React from "react";
import "./App.css";
import { images } from "./imagesPaths";


const Footer = () => (
    <footer className="Footer">
      <div className="footer-box">
        <div className="logo white">
          <img src={images.logoWhite}/>
        </div>
        <div className="contact">
          <div className="phone">
            <img src={images.call}/>
            <a href="tel:+1-931-322-2222">+1 931 322 2222</a>
          </div>
          <div className="socials">
            <div><a href="#"><img src={images.tw}/></a></div>
            <div><a href="#"><img src={images.fb}/></a></div>
            <div><a href="#"><img src={images.ig}/></a></div>
          </div>
        </div>
      </div>
      <div className="copyright"> &copy; 2021 GBS Bank</div>
  
    </footer>
  );

export default Footer; 