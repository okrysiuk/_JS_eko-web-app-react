import React from "react";
//import WhiteButton from "./../buttons/white-button";
import MaterialButton from "./../buttons/material-button";
import "./landing-section.css";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div className="landing-container">
      <h1>
        Feel the soul of the
        <br />
        native land
      </h1>
      <div className="landing-btns">
        <Link to="/login" className="btn-mobile">
          <MaterialButton myStyle="white large">LOG IN</MaterialButton>
        </Link>
        <Link to="/products" className="btn-mobile">
          <MaterialButton myStyle="transparent-white large">
            FAST ORDER
          </MaterialButton>
        </Link>
      </div>
    </div>
  );
}

export default LandingSection;
