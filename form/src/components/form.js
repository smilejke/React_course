import React from "react";
import "../index.css";
import nanoid from "nanoid";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: nanoid(), text: "Junoir Front-end developer" },
      { value: nanoid(), text: "Middle Front-end developer" },
      { value: nanoid(), text: "Senior Front-end developer" },
      { value: nanoid(), text: "Junoir Back-end developer" },
      { value: nanoid(), text: "Middle Back-end developer" },
      { value: nanoid(), text: "Senior Back-end developer" }
    ];
    this.state = {
      name: "",
      contract: true,
      position: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let person = {
      name: this.state.name,
      contract: this.state.contract,
      position: this.state.position,
      id: nanoid()
    };
    this.props.addator(person);

    this.setState({
      name: "",
      position: "",
      contract: true
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
      <form onSubmit={this.handleSubmit}>
        <div className="row1">
          <input
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.handleInputChange}
          />
          <span>Name</span>
        </div>

        <div className="row3">
          <input
            type="checkbox"
            name="contract"
            onChange={this.handleInputChange}
            checked={this.state.contract}
          />
          <span>On Contract</span>
        </div>

        <div className="row2">
          <select
            name="position"
            value={this.state.position}
            onChange={this.handleInputChange}
          >
            {this.options.map(option => {
              return (
                <option key={option.value} value={option.text}>
                  {option.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className="row4">
          <input type="submit" value="Add employee" />
        </div>
      </form>
    );
  }
}

export default Form;
