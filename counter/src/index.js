import React from "react";
import ReactDOM from "react-dom";
import Math from "./components/math.js";
import "./index.css";

const rootElement = document.getElementById("root");

const counterPage = (
  <div>
    <Math />
  </div>
);

ReactDOM.render(counterPage, rootElement);
