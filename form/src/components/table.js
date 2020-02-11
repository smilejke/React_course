import React from "react";
import "../index.css";

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
                <tr key={item.id}>
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

export default Table;
