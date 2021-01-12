import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = (props) => {
  const Style = ["sidebar"];
  if (props.show) {
    Style.push("open");
  }
  return (
    <nav className={Style.join(" ")}>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
