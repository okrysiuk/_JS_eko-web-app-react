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
            Products
          </Link>
        </li>
        <li>
          <Link to="/" onClick={props.sidebarToggle}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
