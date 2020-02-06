import React from "react";
import CounterVerdict from "./counerVerdict.js";
import Button from "./renderButtonRow.js";

class Math extends React.Component {
  constructor(props) {
    super(props);
    this.handleCounterChange = this.handleCounterChange.bind(this);
    this.options = [
      {
        initial: 1,
        incrStep: 1,
        decrStep: -1,
        minRange: -10,
        maxRange: 10,
        onCounterChanges: this.handleCounterChange,
        action: this.doMath
      },
      {
        initial: 5,
        incrStep: 5,
        decrStep: -5,
        minRange: -25,
        maxRange: 25,
        onCounterChanges: this.handleCounterChange,
        action: this.doMath
      },
      {
        initial: 10,
        incrStep: 10,
        decrStep: -10,
        minRange: -50,
        maxRange: 50,
        onCounterChanges: this.handleCounterChange,
        action: this.doMath
      }
    ];
    this.state = {
      counter: this.sumStartValues()
    };
  }

  handleCounterChange(counter) {
    let currentState = this.state.counter;
    let currentSum = (currentState += parseInt(counter));
    this.setState({
      counter: currentSum
    });
  }

  buttonList(props) {
    const { options } = props;
    const buttonList = options.map(n => (
      <Button key={options.indexOf(n)} options={n} />
    ));
    return buttonList;
  }

  render() {
    const counter = this.state.counter;
    return (
      <div>
        <CounterVerdict sum={counter} />
        {this.buttonList(this)}
      </div>
    );
  }

  doMath(e) {
    let current = this.value;
    const decr = this.props.options.decrStep ? this.props.options.decrStep : -1;
    const incr = this.props.options.incrStep ? this.props.options.incrStep : 1;
    const minRange =
      this.props.options.minRange === undefined
        ? -Infinity
        : this.props.options.minRange;

    const maxRange =
      this.props.options.maxRange === undefined
        ? Infinity
        : this.props.options.maxRange;

    if (e.target.className === "minus") {
      if (current > minRange) {
        this.value = current + decr;
      } else return false;
    }
    if (e.target.className === "plus") {
      if (current < maxRange) {
        this.value = current + incr;
      } else return false;
    }
    return true;
  }

  sumStartValues() {
    let sum = 0;
    for (let i = 0; i < this.options.length; i += 1) {
      if (this.options[i].initial) {
        sum += this.options[i].initial;
      } else {
        sum += 0;
      }
    }
    return sum;
  }
}

export default Math;
