import React from "react";
import "../../index.css";

function Row(props) {
  const {
    options: { name, contract, position, id },
    actions: { del, edit }
  } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>
        <input type="checkbox" disabled={true} checked={contract} />
      </td>
      <td>{position}</td>
      <td className="close" data-id={id} onClick={del}>
        <span data-id={id}>&#10008;</span>
      </td>
      <td className="edit" data-id={id} onClick={edit}>
        <span data-id={id}>&#10003;</span>
      </td>
    </tr>
  );
}

export default Row;
