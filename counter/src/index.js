import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const rootElement = document.getElementById("root");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.options.initial
    };
    this.action = props.options.action.bind(this);
  }

  render() {
    return (
      <div className="button-row">
        <button className="button" data-math="decr" onClick={this.action}>
          decrement
        </button>
        <span className="span">{this.state.counter}</span>
        <button className="button" data-math="incr" onClick={this.action}>
          increment
        </button>
      </div>
    );
  }
}

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      {
        initial: 0,
        incrStep: 1,
        decrStep: -1,
        minRange: -10,
        maxRange: 10,
        action: this.doMath
      },
      {
        initial: 5,
        incrStep: 5,
        decrStep: -5,
        minRange: -25,
        maxRange: 25,
        action: this.doMath
      },
      {
        initial: 10,
        incrStep: 10,
        decrStep: -10,
        minRange: -50,
        maxRange: 50,
        action: this.doMath
      }
    ];
    this.state = {
      total: this.getSum()
    };
  }
  render() {
    return (
      <div>
        <p className="output-field">
          Total sum of counters is {this.state.total ? this.state.total : 0}
        </p>
        <Counter options={this.options[0]} />
        <Counter options={this.options[1]} />
        <Counter options={this.options[2]} />
      </div>
    );
  }
  doMath(e) {
    let current = this.props.options.initial;

    if (e.target.getAttribute("data-math") === "decr") {
      if (current > this.props.options.minRange) {
        let next = current + this.props.options.decrStep;
        this.props.options.initial = next;
      } else this.props.options.initial = current;
    }
    if (e.target.getAttribute("data-math") === "incr") {
      if (current < this.props.options.maxRange) {
        let next = current + this.props.options.incrStep;
        this.props.options.initial = next;
      } else this.props.options.initial = current;
    }
    this.setState({
      counter: this.props.options.initial
    });
  }

  getSum() {
    let sum = 0;

    for (let i = 0; i < this.options.length; i += 1) {
      sum += this.options[i].initial;
    }
    return sum;
  }
}

const counterPage = (
  <div>
    <Sum />
  </div>
);

ReactDOM.render(counterPage, rootElement);
