import React from "react";
import "../index.css";
import nanoid from "nanoid";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: "JFD", text: "Junoir Front-end developer", key: nanoid() },
      { value: "MFD", text: "Middle Front-end developer", key: nanoid() },
      { value: "SFD", text: "Senior Front-end developer", key: nanoid() },
      { value: "JBD", text: "Junoir Back-end developer", key: nanoid() },
      { value: "MBD", text: "Middle Back-end developer", key: nanoid() },
      { value: "SBD", text: "Senior Back-end developer", key: nanoid() }
    ];
  }
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
            {this.options.map(option => {
              return (
                <option key={option.key} value={option.value}>
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
