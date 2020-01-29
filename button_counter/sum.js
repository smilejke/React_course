import { Counter } from "./counter.js";

export class Sum {
  constructor() {
    this.initial = [5, 10]; // для примера не передал начальное значение третьему счетчику
    this.totalValue = this.getSum();
  }

  decrement(event) {
    const newValue = this.initial - this.decrStep;

    if (newValue >= this.minRange) {
      const outputField = event.target.parentElement.querySelector(
        ".output-field"
      );

      this.initial = newValue;
      outputField.innerText = this.initial;

      this.handleChanges(this.initial);
    }
  }

  increment(event) {
    const newValue = this.initial + this.incrStep;

    if (newValue <= this.maxRange) {
      const outputField = event.target.parentElement.querySelector(
        ".output-field"
      );
      this.initial = newValue;
      outputField.innerText = this.initial;

      this.handleChanges(this.initial);
    }
  }

  options() {
    const counter1 = new Counter(
      {
        initial: this.initial[0] ? this.initial[0] : 0,
        incrStep: 1,
        decrStep: 1,
        minRange: 0,
        maxRange: 10
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 0)
    );
    const counter5 = new Counter(
      {
        initial: this.initial[1] ? this.initial[1] : 0,
        incrStep: 5,
        // decrStep: 5, // для примера не передал параметр
        minRange: -20,
        maxRange: 20
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 1)
    );
    const counter10 = new Counter(
      {
        initial: this.initial[2] ? this.initial[2] : 0,
        incrStep: 10,
        decrStep: 10,
        minRange: -50,
        maxRange: 100
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 2)
    );

    const total = document.createElement("p");
    total.className = "counter";
    total.innerText = `Total is ${this.totalValue}`;

    const container = document.createElement("div");
    container.append(
      total,
      counter1.render(),
      counter5.render(),
      counter10.render()
    );

    return container;
  }

  handleChanges(i, value) {
    this.initial[i] = value;
    this.totalValue = this.getSum();
    this.counter = document.querySelector(".counter");
    this.counter.innerText = `Total is ${this.totalValue}`;
  }

  getSum() {
    this.sum = 0;
    for (let i in this.initial) {
      this.sum += this.initial[i];
    }
    return this.sum;
  }
}
