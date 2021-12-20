import React from "react";

export default function TaskRow(props) {
  return (
    <tr>
      <td>{props.number}</td>
      <td>
        <span className={`task-content task-${props.number}`}>
          {props.content}
        </span>
        <input
          type="text"
          className={`edit-input edit-input-${props.number}`}
        />
        <button
          className={`change-btn change-btn-${props.number}`}
          onClick={() => props.updateTask(props.number - 1)}
        >
          Change
        </button>
      </td>
      <td className="actions">
        <abbr title="delete">
          {" "}
          <button
            className="delete"
            onClick={() => props.deleteTask(props.number - 1)}
          >
            x
          </button>
        </abbr>
        <abbr title="Edit">
          <i
            className="fas fa-pen-square"
            onClick={() => props.editTask(props.number)}
          ></i>
        </abbr>
      </td>
    </tr>
  );
}
