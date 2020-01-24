class Counter {
  constructor(hash) {
    this.initial = hash.initial;
    this.decrStep = hash.decrStep;
    this.incrStep = hash.incrStep;
    this.minRange = hash.minRange;
    this.maxRange = hash.maxRange;
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
  initial: 0,
  decrStep: 5,
  incrStep: 5,
  minRange: 0,
  maxRange: 25
});
const counter10 = new Counter({
  initial: 0,
  decrStep: 10,
  incrStep: 10,
  minRange: -50,
  maxRange: 100
});

const renderOneCoutnerRow = counter => {
  const div = document.createElement("div");
  div.className = "button-row";
  document.body.appendChild(div);

  const decrButton = document.createElement("input");
  decrButton.type = "button";
  decrButton.value = `minus ${counter.decrStep}`;
  decrButton.addEventListener("click", () => {
    if (
      `${counter.initial - counter.decrStep}` < counter.minRange ||
      `${counter.initial - counter.decrStep}` > counter.maxRange
    ) {
      console.log("out of range");
      return null;
    }
    output.innerText = parseInt(`${(counter.initial -= counter.decrStep)}`);
  });
  div.appendChild(decrButton);

  const output = document.createElement("span");
  output.className = "counter";
  output.innerText = `${counter.initial}`;
  div.appendChild(output);

  const incrButton = document.createElement("input");
  incrButton.type = type = "button";
  incrButton.value = `plus ${counter.incrStep}`;
  incrButton.addEventListener("click", () => {
    if (
      `${counter.initial + counter.incrStep}` < counter.minRange ||
      `${counter.initial + counter.incrStep}` > counter.maxRange
    ) {
      console.log("out of range");
      return null;
    }
    output.innerText = parseInt(`${(counter.initial += counter.incrStep)}`);
  });
  div.appendChild(incrButton);
};
renderOneCoutnerRow(counter1);
renderOneCoutnerRow(counter5);
renderOneCoutnerRow(counter10);
