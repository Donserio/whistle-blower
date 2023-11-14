import React, { useState } from "react";
import "./App.css";
import { images } from "./imagesPaths";
import WhistleBlowerForm from "./WhistleBlowerForm";


const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("form-overlay")) {
      closeForm();
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="grid-one whistle-blower">
          <img src={images.whistle} alt="Whistle" />
          <p className="text text-align-center fsize-32" onClick={openForm}>Whistle Blower</p>
        </div>
        {showForm && (
          <div className="form-overlay" onClick={handleOverlayClick}>
            <div className="form-container">
              <WhistleBlowerForm />
              {/* <button className="close-button" onClick={closeForm}>
                Close
              </button> */}
            </div>
          </div>
        )}
        <div className="grid-two half-column">
          <img src={images.illustration} alt="Illustration" />
        </div>
        <div className="grid-three half-column cta">
          <h3>Code of Corporate Governance</h3>
          <p>
            Have you experienced or observed any unethical or unprofessional conduct on the part any of our staff?
            Please click the button below to fill a form and let us know. Your Confidentiality wishes shall be fully respected.
          </p>
          <button className="text" onClick={openForm}>
            Whistle Blower
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;