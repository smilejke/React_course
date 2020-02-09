import React from "react";
import "../index.css";

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

export default Form;
