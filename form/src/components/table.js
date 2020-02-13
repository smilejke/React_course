import React from "react";
import "../index.css";
import Row from "./sub/row.js";

function Table(props) {
  const items = props.items;
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
            return <Row key={item.id} options={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
