import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import BurgerButton from "./../buttons/burger-button.js";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";

const NavBar = (props) => {
  return (
    <div className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-burger-button">
          <BurgerButton click={props.sidebarToggle} />
        </div>
        <div className="spacer-before-logo" />
        <div className="toolbar-logo">
          <Link to="/">
            <GiIcons.GiShinyApple className="apple-button" />
            LOGOTYPE
          </Link>
        </div>
        <div className="spacer-after-logo" />
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
        <div className="cart">
          <Link to="/">
            <FaIcons.FaShoppingCart />
            <span className='cart-number'>5</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
