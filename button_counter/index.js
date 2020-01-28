import { Sum } from "./sum.js";

export class Application {
  render() {
    const appDiv = document.createElement("div");
    const createCounter = new Sum();
    appDiv.append(createCounter.options());

    return appDiv;
  }
}

const app = new Application();
document.body.append(app.render());
