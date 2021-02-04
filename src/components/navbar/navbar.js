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
              <Link to="/">
                {/*<FaIcons.FaHome className="navbar-icon" />*/}
                Home
              </Link>
            </li>
            <li>
              <Link to="/products">
                {/*<GiIcons.GiFruitTree className="navbar-icon" />*/}
                Products
              </Link>
            </li>
            <li>
              <Link to="/store">
                {/*<FaIcons.FaStore className="navbar-icon" />*/}
                Store
              </Link>
            </li>
            <li>
              <Link to="/vacancies">
                {/*<GiIcons.GiDiploma className="navbar-icon" />*/}
                Vacancies
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                {/*<FaIcons.FaPhoneSquare className="navbar-icon" />*/}
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart">
          <Link to="/cart">
            <FaIcons.FaShoppingCart />
            {cartItemsNumber === 0 ? null : (
              <strong className="cart-number">{cartItemsNumber}</strong>
            )}
            {/*<span>Cart</span>*/}
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
