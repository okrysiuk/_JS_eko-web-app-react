import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import BurgerButton from "./../buttons/burger-button.js";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import { connect } from "react-redux";



const NavBar = ({ sidebarToggle, cartItemsNumber }) => {
  return (
    <div className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-burger-button">
          <BurgerButton click={sidebarToggle} />
        </div>
        <div className="spacer-before-logo" />
        <div className="toolbar-logo">
          <Link to="/">
            <GiIcons.GiShinyApple className="apple-button" />
            ECOSPHERE
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
          <Link to="/cart">
            <FaIcons.FaShoppingCart />
            { cartItemsNumber === 0 ? null : <span className="cart-number">{cartItemsNumber}</span> }
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItemsNumber: cartItems.length,
  };
};

export default connect(mapStateToProps)(NavBar);
