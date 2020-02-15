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
      <td>
        <span className="close" id={props.options.id} onClick={props.delete}>
          &#10006;
        </span>
      </td>
    </tr>
  );
}

export default Row;
