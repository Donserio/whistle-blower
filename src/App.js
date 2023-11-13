import React, {useState} from "react"
import "./App.css";
import { images } from "./imagesPaths";
import HeroSection from "./HeroSection";


const Header = () => (
  <header>
    <div className="logo">
      <img src={images.logo}/>
    </div>
    <div className="auth-buttons">
      <button className="btn text register">Register</button>
      <button className="btn text login">Login</button>
    </div>
  </header>
);


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


const App = () => (
  <div className="app">
    <Header />
    <HeroSection />
    <Footer />
  </div>
);

export default App