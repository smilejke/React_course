import React from "react";
import Table from "./table.js";
import Form from "./form.js";
import nanoid from "nanoid";
import "../index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contract: true,
      position: "",
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      name: this.state.name,
      contract: this.state.contract,
      position: this.state.position,
      id: nanoid()
    });
    this.setState({
      items,
      name: "",
      position: ""
    });
  }

  handleInputChange(e) {
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          submit={this.handleSubmit}
          inputChange={this.handleInputChange}
          newName={this.state.name}
          newConctacted={this.state.contract}
          newPosition={this.state.position}
        />
        <Table items={this.state.items} />
      </div>
    );
  }
}

export default App;
