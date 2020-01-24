class Counter {
  constructor(hash) {
    this.initial = hash.initial ? hash.initial : 0;
    this.decrStep = hash.step.decrStep ? hash.step.decrStep : 1;
    this.incrStep = hash.step.incrStep ? hash.step.incrStep : 1;
    this.minRange = hash.range.minRange;
    this.maxRange = hash.range.maxRange;
  }
}

const counter1 = new Counter({
  initial: 0,
  step: {
    decrStep: 1,
    incrStep: 1
  },
  range: {
    minRange: 0,
    maxRange: 10
  }
});
const counter5 = new Counter({
  initial: 10,
  step: {
    decrStep: 5,
    incrStep: 5
  },
  range: {
    minRange: -25,
    maxRange: 25
  }
});
const counter10 = new Counter({
  initial: 0,
  step: {
    decrStep: 10,
    incrStep: 10
  },
  range: {
    minRange: -50,
    maxRange: 100
  }
});

const renderOneCoutnerRow = counter => {
  const div = document.createElement("div");
  div.className = "button-row";
  document.body.appendChild(div);

  const decrButton = document.createElement("input");
  decrButton.type = "button";
  decrButton.id = "decr";
  decrButton.value = counter ? `minus ${counter.incrStep}` : "minus";
  decrButton.addEventListener("click", () => {
    if (counter) {
      if (
        `${counter.initial - counter.decrStep}` < counter.minRange ||
        `${counter.initial - counter.decrStep}` > counter.maxRange
      ) {
        console.log("out of range");
        return null;
      }
      output.innerText = parseInt(`${(counter.initial -= counter.decrStep)}`);
    } else output.innerText--;
  });
  div.appendChild(decrButton);

  const output = document.createElement("span");
  output.className = "counter";
  output.innerText = counter ? `${counter.initial}` : "0";
  div.appendChild(output);

  const incrButton = document.createElement("input");
  incrButton.type = type = "button";
  incrButton.value = counter ? `plus ${counter.incrStep}` : "plus";
  incrButton.addEventListener("click", () => {
    if (counter) {
      if (
        `${counter.initial + counter.incrStep}` < counter.minRange ||
        `${counter.initial + counter.incrStep}` > counter.maxRange
      ) {
        console.log("out of range");
        return null;
      }
      output.innerText = parseInt(`${(counter.initial += counter.incrStep)}`);
    } else output.innerText++;
  });
  div.appendChild(incrButton);
};
renderOneCoutnerRow(counter1);
renderOneCoutnerRow(counter5);
// renderOneCoutnerRow(counter10);
renderOneCoutnerRow();
