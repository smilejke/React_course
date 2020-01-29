export class Counter {
  constructor(hash = {}, increment, decrement, handleChanges) {
    this.initial = hash.initial === undefined ? 0 : hash.initial;
    this.incrStep = hash.incrStep === undefined ? 1 : hash.incrStep;
    this.decrStep = hash.decrStep === undefined ? 1 : hash.decrStep;
    this.maxRange = hash.maxRange === undefined ? Infinity : hash.maxRange;
    this.minRange = hash.minRange === undefined ? -Infinity : hash.minRange;
    this.handleChanges = handleChanges;
    this.increment = increment;
    this.decrement = decrement;
  }

  render() {
    const incrButton = document.createElement("button");
    incrButton.className = "button";
    incrButton.append("plus");
    incrButton.addEventListener("click", this.increment.bind(this));

    const decrButton = document.createElement("button");
    decrButton.className = "button";
    decrButton.append("minus");
    decrButton.addEventListener("click", this.decrement.bind(this));

    const output = document.createElement("span");
    output.className = "output-field";
    output.append(this.initial);

    const div = document.createElement("div");
    div.className = "button-row";
    div.append(decrButton, output, incrButton);

    return div;
  }
}
