import React from "react";
import WhiteButton from "./../buttons/white-button";
import "./landing-section.css";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div className="landing-container">
      <h1>Feel the soul of your<br></br>native land</h1>
      <div className="landing-btns">
        <Link to="/products" className="btn-mobile">
          <WhiteButton
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            FAST ORDER
          </WhiteButton>
        </Link>
        <Link to="/login" className="btn-mobile">
          <WhiteButton
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            LOG IN
          </WhiteButton>
        </Link>
      </div>
    </div>
  );
}

export default LandingSection;
