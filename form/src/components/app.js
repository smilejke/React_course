import React from "react";
import Table from "./table.js";
import Form from "./form.js";
import "../index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staff: []
    };
    this.employeePusher = this.employeePusher.bind(this);
  }

  employeePusher(person) {
    let staff = [...this.state.staff];
    staff.push(person);
    this.setState({ staff: staff });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Form addator={this.employeePusher} />
        <Table staff={this.state.staff} />
      </div>
    );
  }
}

export default App;
