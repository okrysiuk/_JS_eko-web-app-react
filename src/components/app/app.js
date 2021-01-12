import React, { useState } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./../../pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./../sidebar";
import NavBar from "./../navbar";
import Shadow from "./../sidebar/shadow.js";

const App = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <>
      <Router>
        <NavBar sidebarToggle={() => setSidebarStatus(!sidebarStatus)} />
        {console.log(sidebarStatus)}
        {sidebarStatus ? <Shadow click={() => setSidebarStatus(false)}/> : null}
        <Sidebar show={sidebarStatus} />
        <Home />
      </Router>
    </>
  );
};

export default App;
