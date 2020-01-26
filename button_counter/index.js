class Counter {
  constructor(hash = {}) {
    this.initial = hash.initial ? hash.initial : 0;
    this.incrStep = hash.incrStep ? hash.incrStep : 1;
    this.decrStep = hash.decrStep ? hash.decrStep : 1;
    this.minRange = hash.minRange === undefined ? -Infinity : hash.minRange;
    this.maxRange = hash.maxRange === undefined ? Infinity : hash.maxRange;
    this.counter = this.initial;
  }

  decrement(event) {
    const outputField = event.target.parentElement.querySelector(
      ".output-field"
    );

    if (this.counter - this.decrStep >= this.minRange) {
      this.counter = this.counter - this.decrStep;
      outputField.innerText = this.counter;
      this.getSum();
    }
  }

  increment(event) {
    const outputField = event.target.parentElement.querySelector(
      ".output-field"
    );

    if (this.counter + this.incrStep <= this.maxRange) {
      this.counter = this.counter + this.incrStep;
      outputField.innerText = this.counter;
      this.getSum();
    }
  }

  getSum() {
    let sum = 0;
    let outputField = document.querySelectorAll(".output-field");
    let totalText = document.getElementById("total");

    for (let index = 0; index < outputField.length; index += 1) {
      sum += parseInt(outputField[index].innerText);
    }
    totalText.innerText = `Total is ${sum}`;
  }

  render() {
    if (marker) {
      const total = document.createElement("p");
      total.id = "total";
      document.body.appendChild(total);
      marker = false;
    }

    const decrButton = document.createElement("button");
    decrButton.innerText = "minus";
    decrButton.addEventListener("click", this.decrement.bind(this));

    const output = document.createElement("span");
    output.className = "output-field";
    output.append(this.counter);

    const incrButton = document.createElement("button");
    incrButton.innerText = "plus";
    incrButton.addEventListener("click", this.increment.bind(this));

    const div = document.createElement("div");
    div.className = "button-row";
    div.append(decrButton, output, incrButton);
    document.body.appendChild(div);

    this.getSum();
    return div;
  }
}

const counter1 = new Counter({
  initial: 0,
  decrStep: 1,
  incrStep: 1,
  minRange: 0,
  maxRange: 10
});

const counter5 = new Counter({
  initial: 10,
  decrStep: 5,
  incrStep: 5,
  minRange: -25,
  maxRange: 25
});

const counter10 = new Counter({
  initial: 50,
  decrStep: 10,
  incrStep: 10,
  minRange: -20,
  maxRange: 100
});
// const counter10 = new Counter();

let marker = true;

counter1.render();
counter5.render();
counter10.render();
