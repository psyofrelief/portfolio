import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);
root.render(
  <Router>
    <App />
  </Router>
);
