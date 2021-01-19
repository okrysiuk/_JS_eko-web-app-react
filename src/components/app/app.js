import React, { useState } from "react";
import "./app.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./../../pages/home";
import Sidebar from "./../sidebar";
import NavBar from "./../navbar";
import Shadow from "./../sidebar/shadow.js";
import Cart from "./../../pages/cart";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <>
      <NavBar sidebarToggle={() => setSidebarStatus(!sidebarStatus)} />
      {sidebarStatus ? <Shadow click={() => setSidebarStatus(false)} /> : null}
      <Sidebar
        show={sidebarStatus}
        sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
      />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default App;
