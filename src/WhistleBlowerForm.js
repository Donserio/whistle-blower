import React, { useState } from "react";
import "./App.css";

const WhistleBlowerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add logic here to send the form data to a server or perform any other actions
    // For demonstration purposes, let's just update the state to indicate submission
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form className="form-main" onSubmit={handleSubmit}>
          <h2 className="text fsize-32">Fill the Form</h2>
          <div className="form-group text">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter Full Name" required />
          </div>
          <div className="form-group text">
            <label htmlFor="phoneNumber">Number</label>
            <input type="tel" id="phoneNumber" placeholder="Enter Number" required />
          </div>
          <div className="form-group text">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" required />
          </div>
          <div className="form-group text">
            <label htmlFor="officerName">Name of Officer</label>
            <input type="text" id="officerName" placeholder="Enter Name of Officer" required />
          </div>
          <div className="form-group text">
            <label htmlFor="conductRemarks">Nature of Conduct and Remarks</label>
            <textarea className="input" id="conductRemarks" placeholder="Enter Message or Request" required></textarea>
          </div>
          <button className="submit-form text" type="submit">Submit</button>
        </form>
      ) : (
        <p className="submission-message fsize-32">Form submitted successfully!</p>
      )}
    </div>
  );
};

export default WhistleBlowerForm;
