import React, { useState } from "react";
import "./app.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

//* Components
import Sidebar from "./../sidebar";
import NavBar from "./../navbar";
import Shadow from "./../sidebar/shadow.js";
import Footer from "./../footer";

//* Pages
import Home from "./../../pages/home";
import Store from "../../pages/store";
import Vacancies from "./../../pages/vacancies";
import Contacts from "./../../pages/contacts";
import Cart from "./../../pages/cart";
import Social from "./../../pages/social";
import Products from "../../pages/products";

const App = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <>
      <div className="app-header">
        <NavBar sidebarToggle={() => setSidebarStatus(!sidebarStatus)} />
        {sidebarStatus ? (
          <Shadow click={() => setSidebarStatus(false)} />
        ) : null}
        <Sidebar
          show={sidebarStatus}
          sidebarToggle={() => setSidebarStatus(!sidebarStatus)}
        />
      </div>
      <div className="app-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/store" component={Store} />
          <Route path="/vacancies" component={Vacancies} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/cart" component={Cart} />
          <Route path="/social" component={Social} />
        </Switch>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
