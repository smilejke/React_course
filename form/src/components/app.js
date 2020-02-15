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
    this.deleteRow = this.deleteRow.bind(this);
  }

  employeePusher(person) {
    let staff = [...this.state.staff];
    staff.push(person);
    this.setState({ staff: staff });
  }

  deleteRow(e) {
    let staff = [...this.state.staff];
    const target = e.target;
    const id = target.id;

    staff.splice(
      staff.indexOf(
        staff.find(person => {
          return person.id === id;
        })
      ),
      1
    );

    this.setState({
      staff: staff
    });
  }

  render() {
    return (
      <div className="App">
        <Form addator={this.employeePusher} />
        <Table staff={this.state.staff} delete={this.deleteRow} />
      </div>
    );
  }
}

export default App;
