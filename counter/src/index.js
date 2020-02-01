import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const rootElement = document.getElementById("root");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.options.start,
      incrStep:
        props.options.incrStep === undefined ? 1 : props.options.incrStep,
      decrStep:
        props.options.decrStep === undefined ? 1 : props.options.decrStep,
      minRange:
        props.options.minRange === undefined
          ? -Infinity
          : props.options.minRange,
      maxRange:
        props.options.maxRange === undefined ? Infinity : props.options.maxRange
    };
    this.increment = props.increment.bind(this);
    this.decrement = props.decrement.bind(this);
  }

  render() {
    return (
      <div className="button-row">
        <button className="button" onClick={this.decrement}>
          decrement
        </button>
        <span>{this.state.counter}</span>
        <button className="button" onClick={this.increment}>
          increment
        </button>
      </div>
    );
  }
}

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      start: [0, 5, 10]
    };
  }
  render() {
    return (
      <div>
        <p className="output-field">
          Total sum of all counters are {this.state.total}
        </p>
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          options={{
            start: this.state.start[0] ? this.state.start[0] : 0,
            incrStep: 1,
            decrStep: 1,
            minRange: -10,
            maxRange: 10
          }}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          options={{
            start: this.state.start[1] ? this.state.start[1] : 0,
            incrStep: 5,
            decrStep: 5,
            minRange: -25,
            maxRange: 25
          }}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          options={{
            start: this.state.start[2] ? this.state.start[2] : 0,
            incrStep: 10,
            decrStep: 10,
            minRange: -70,
            maxRange: 70
          }}
        />
      </div>
    );
  }
  increment() {
    this.newValue = this.state.counter + this.state.incrStep;

    if (this.newValue <= this.state.maxRange) {
      this.setState({
        counter: this.newValue
      });
    }
  }

  decrement() {
    this.newValue = this.state.counter - this.state.decrStep;
    if (this.newValue >= this.state.minRange) {
      this.setState({
        counter: this.newValue
      });
    }
  }
}
const counterPage = (
  <div>
    <Sum />
  </div>
);

ReactDOM.render(counterPage, rootElement);
