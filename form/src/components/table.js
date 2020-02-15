import React from "react";
import "../index.css";
import Row from "./sub/row.js";

function Table(props) {
  const staff = props.staff;
  return (
    <div className="form-container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Contract</th>
            <th>Position</th>
          </tr>
          {staff.map(person => {
            return (
              <Row key={person.id} options={person} delete={props.delete} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
