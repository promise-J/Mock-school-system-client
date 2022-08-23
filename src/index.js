import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import DataProvider, { store } from "./redux/store";
import axios from "axios";
import { dispatchLogout } from "./redux/actions/authAction";


const {REACT_APP_BASE_URL} = process.env

// "proxy": "http://localhost:5000"
axios.defaults.baseURL = REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

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
