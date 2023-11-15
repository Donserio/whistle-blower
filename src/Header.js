import React from "react";
import "./App.css";
import { images } from "./imagesPaths";

const Header = () => (
    <header>
      <div className="logo">
        <a href="https://www.gbsbank.co.za/">
          <img src={images.logo}/>
        </a>
      </div>
      <div className="auth-buttons">

        <a href="#">
          <button className="btn text-align-center text register">Register</button>
        </a>
        <a href="#">
          <button className="btn text-align-centertext login">Login</button>
        </a>
      </div>
    </header>
  );
  
export default Header;  