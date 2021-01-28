import React, { useState } from "react";
import "./app.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./../sidebar";
import NavBar from "./../navbar";
import Shadow from "./../sidebar/shadow.js";
import { Switch, Route } from "react-router-dom";

//* Pages
import Home from "./../../pages/home";
import Production from "./../../pages/production";
import Store from "../../pages/store";
import Vacancies from './../../pages/vacancies';
import Contacts from './../../pages/contacts';
import Cart from "./../../pages/cart";






const App = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <div>
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
        <Route path="/production" exact>
          <Production />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/vacancies" exact>
          <Vacancies />
        </Route>
        <Route path="/contacts" exact>
          <Contacts />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
