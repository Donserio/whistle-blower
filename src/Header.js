import React from "react";
import "./App.css";
import { images } from "./imagesPaths";

const Header = () => (
    <header>
      <div className="logo">
        <img src={images.logo}/>
      </div>
      <div className="auth-buttons">
        <button className="btn text-align-center text register">Register</button>
        <button className="btn text-align-centertext login">Login</button>
      </div>
    </header>
  );
  
export default Header;  