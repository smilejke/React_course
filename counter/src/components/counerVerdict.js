import React from "react";
import "../index.css";

function CounterVerdict(props) {
  return (
    <p className="output-field">Total sum of all counters is {props.sum}</p>
  );
}
export default CounterVerdict;
