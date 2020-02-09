import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import "./index.css";

const rootElement = document.getElementById("root");

const el = <App />;

ReactDOM.render(el, rootElement);
