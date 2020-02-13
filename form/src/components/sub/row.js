import React from "react";
import "../../index.css";

function Row(props) {
  return (
    <tr>
      <td>{props.options.name}</td>
      <td>
        <input
          type="checkbox"
          disabled={true}
          checked={props.options.contract}
        />
      </td>
      <td>{props.options.position}</td>
    </tr>
  );
}

export default Row;
