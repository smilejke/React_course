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
