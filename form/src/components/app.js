import React from "react";
import Table from "./table.js";
import Form from "./form.js";
import "../index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staff: [],
      editor: {},
      editorMode: false
    };

    this.employeePusher = this.employeePusher.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.editRow = this.editRow.bind(this);
    this.buttonValueChange = this.buttonValueChange.bind(this);
  }

  employeePusher(person) {
    let staff = [...this.state.staff];

    if (!this.state.editorMode) {
      staff.push(person);
      this.setState({
        staff: staff
      });
    } else {
      const searchIndexToChange = staff.indexOf(
        staff.find(worker => {
          return worker.id === this.state.editor.id;
        })
      );

      staff[searchIndexToChange] = {
        name: person.name,
        contract: person.contract,
        position: person.position,
        id: this.state.editor.id
      };

      this.setState({
        staff: staff,
        editorMode: false
      });
    }
  }

  buttonValueChange() {
    if (this.state.editorMode) {
      return "Accept changes";
    } else return "Add employee";
  }

  editRow(e) {
    let staff = [...this.state.staff];
    const target = e.target;
    const id = target.getAttribute("data-id");

    const targetPerson = staff.find(person => {
      return person.id === id;
    });

    this.setState({
      editor: targetPerson,
      editorMode: true
    });
  }

  deleteRow(e) {
    let staff = [...this.state.staff];
    const target = e.target;
    const id = target.getAttribute("data-id");

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
        <Form
          saveWorker={this.employeePusher}
          editable={this.state.editor}
          buttonName={this.buttonValueChange}
        />

        <Table
          staff={this.state.staff}
          del={this.deleteRow}
          edit={this.editRow}
        />
      </div>
    );
  }
}

export default App;
