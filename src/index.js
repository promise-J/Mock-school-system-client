import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import DataProvider, { store } from "./redux/store";
import axios from "axios";
import { dispatchLogout } from "./redux/actions/authAction";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const errMsg = error.response?.data?.msg;
    const errStatus = error.response?.status;

    if (errMsg) {
      if (errStatus === 400 && errMsg && errMsg.includes("Authorization")) {
        store.dispatch(dispatchLogout());
      }
    }

    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
