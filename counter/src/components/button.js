import React from "react";
import CounterValue from "./counterValue.js";
import "../index.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { counter: props.options.initial ? props.options.initial : 0 };
    this.action = props.options.action.bind(this);
  }
  render() {
    const counter = this.state.counter;
    const decr = this.props.options.decrStep ? this.props.options.decrStep : -1;
    const incr = this.props.options.incrStep ? this.props.options.incrStep : 1;

    return (
      <div className="button-row">
        <button className="minus" data-math={decr} onClick={this.handleChange}>
          decrement
        </button>
        <CounterValue counter={counter} />
        <button className="plus" data-math={incr} onClick={this.handleChange}>
          increment
        </button>
      </div>
    );
  }
  handleChange(e) {
    if (this.action(e)) {
      this.props.options.onCounterChanges(e.target.getAttribute("data-math"));
    }
  }
}

export default Button;
