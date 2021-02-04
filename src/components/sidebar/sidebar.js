import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai";

const Sidebar = (props) => {
  const Style = ["sidebar"];
  if (props.show) {
    Style.push("open");
  }
  return (
    <nav className={Style.join(" ")}>
      <div className="sidebar-close">
        <AiIcons.AiOutlineClose
          className="close-button"
          onClick={props.sidebarToggle}
        />
      </div>
      <ul>
        <li>
          <Link to="/" onClick={props.sidebarToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={props.sidebarToggle}>
            Product range
          </Link>
        </li>
        <li>
          <Link to="/store" onClick={props.sidebarToggle}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/vacancies" onClick={props.sidebarToggle}>
            Vacancies
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={props.sidebarToggle}>
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={props.sidebarToggle}>
            Shopping cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
