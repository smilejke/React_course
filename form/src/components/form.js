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

    let { name, contract, position, id } = this.props.editable;

    this.state = {
      name: name ? name : "",
      contract: contract ? contract : true,
      position: position ? position : "",
      id: id ? id : ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editable.id === prevProps.editable.id) {
      return null;
    } else {
      let { name, contract, position, id } = this.props.editable;
      this.setState({
        name: name,
        contract: contract,
        position: position,
        id: id
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const addWorker = this.props.actions.addWorker;
    let { name, contract, position } = this.state;

    const person = {
      name: name,
      contract: contract,
      position: position,
      id: nanoid()
    };

    addWorker(person);

    this.setState({
      name: "",
      contract: true,
      position: "",
      id: ""
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
    let { name, contract, position } = this.state;
    const changeName = this.props.actions.buttonName();

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row1">
          <input
            value={name}
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
            checked={contract}
          />
          <span>On Contract</span>
        </div>

        <div className="row2">
          <select
            name="position"
            value={position}
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
          <input type="submit" value={changeName} />
        </div>
      </form>
    );
  }
}

export default Form;
