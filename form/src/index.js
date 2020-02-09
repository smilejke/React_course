import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const rootElement = document.getElementById("root");

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
      position: this.state.position
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

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div className="form-container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Contract</th>
              <th>Position</th>
            </tr>
            {items.map(item => {
              return (
                <tr key={item.name + Math.random()}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      disabled={true}
                      checked={item.contract}
                    />
                  </td>
                  <td>{item.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <div className="row1">
          <input
            value={this.props.newName}
            type="text"
            name="name"
            onChange={this.props.inputChange}
          />
          <span>Name</span>
        </div>

        <div className="row3">
          <input
            type="checkbox"
            name="contract"
            onChange={this.props.inputChange}
            defaultChecked={this.props.newConctacted}
          />
          <span>On Contract</span>
        </div>

        <div className="row2">
          <select
            name="position"
            value={this.props.newPosition}
            onChange={this.props.inputChange}
          >
            <option value="JFD">Junoir Front-end developer</option>
            <option value="MFD">Middle Front-end developer</option>
            <option value="SFD">Senior Front-end developer</option>
            <option value="JBD">Junoir Back-end developer</option>
            <option value="MBD">Middle Back-end developer</option>
            <option value="SBD">Senior Back-end developer</option>
          </select>
        </div>
        <div className="row4">
          <input type="submit" value="Add employee" />
        </div>
      </form>
    );
  }
}

ReactDOM.render(<App />, rootElement);
