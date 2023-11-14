import React from "react";
import "./App.css";

const WhistleBlowerForm = () => {
  return (
    <form className="form-main">
      <h2 className="text fsize-32">Fill the Form</h2>
      <div className="form-group text">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Enter Full Name" />
      </div>
      <div className="form-group text">
        <label htmlFor="phoneNumber">Number</label>
        <input type="tel" id="phoneNumber" placeholder="Enter Number" />
      </div>
      <div className="form-group text">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Email" />
      </div>
      <div className="form-group text">
        <label htmlFor="officerName">Name of Officer</label>
        <input type="text" id="officerName" placeholder="Enter Name of Officer" />
      </div>
      <div className="form-group text">
        <label htmlFor="conductRemarks">Nature of Conduct and Remarks</label>
        <textarea className="input" id="conductRemarks" placeholder="Enter Message or Request"></textarea>
      </div>
      <button className="submit-form text" type="submit">Submit</button>
    </form>
  );
};

export default WhistleBlowerForm;
