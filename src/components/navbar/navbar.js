import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import BurgerButton from "./../buttons/burger-button.js";

const NavBar = (props) => {
  return (
    <div className="toolbar">
      <nav className="toolbar-navigation">
        <div className='toolbar-burger-button'>
          <BurgerButton click={props.sidebarToggle}/>
        </div>
        <div className="toolbar-logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="spacer" />
        <div className="toolbar-items">
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
