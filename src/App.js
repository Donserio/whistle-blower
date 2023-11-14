import React, {useState} from "react"
import "./App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";


const App = () => (
  <div className="app">
    <Header />
    <HeroSection />
    <Footer />
  </div>
);

export default App