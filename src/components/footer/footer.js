import React from "react";
import * as TiIcons from "react-icons/ti";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>Follow us</p>
      <div className="footer-icons-container">
        <div className="footer-spacer"></div>
        <Link to="/social">
          <TiIcons.TiSocialFacebookCircular />
        </Link>
        <Link to="/social">
          <TiIcons.TiSocialLinkedinCircular />
        </Link>
        <Link to="/social">
          <TiIcons.TiSocialYoutubeCircular />
        </Link>
        <Link to="/social">
          <TiIcons.TiSocialInstagramCircular />
        </Link>
        <Link to="/social">
          <TiIcons.TiSocialTwitterCircular />
        </Link>
        <div className="footer-spacer"></div>
      </div>
    </div>
  );
};

export default Footer;
