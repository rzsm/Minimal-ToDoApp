import React from "react";

export default function TaskRow(props) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [editText, setEditText] = React.useState("");

  function handleChangeBtn() {
    props.setTasks((prevTasks) => {
      let updatedTasks = [...prevTasks];
      updatedTasks[props.number - 1] = { content: editText };
      return updatedTasks;
    });
    setIsEditMode(false);
  }

  function deleteTask() {
    props.setTasks((prevTasks) => {
      let updatedTasks = [...prevTasks];
      updatedTasks.splice(props.number - 1, 1);
      return updatedTasks;
    });
  }

  return (
    <tr>
      <td>{props.number}</td>
      <td>
        {!isEditMode ? (
          <span className="task-content"> {props.content} </span>
        ) : (
          <>
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={(event) => setEditText(event.target.value)}
            />
            <button className="change-btn" onClick={handleChangeBtn}>
              {" "}
              Change
            </button>
          </>
        )}
      </td>
      <td className="actions">
        <abbr title="delete">
          <button className="delete" onClick={deleteTask}>
            x
          </button>
        </abbr>
        <abbr title="Edit">
          <i
            className="fas fa-pen-square"
            onClick={() => {
              setIsEditMode(true);
            }}
          ></i>
        </abbr>
      </td>
    </tr>
  );
}
