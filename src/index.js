import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import EkoStoreService from "./services/eko-store-service";
import { EkoStoreServiceProvider } from "./components/eko-store-service-context";
import store from "./store.js";

const ekoStoreService = new EkoStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <EkoStoreServiceProvider value={ekoStoreService}>
        <Router>
          <App />
        </Router>
      </EkoStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
