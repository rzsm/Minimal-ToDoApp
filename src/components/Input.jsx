import React from "react";

export default function Input(props) {
  const [taskContent, setTaskContent] = React.useState("");

  function handleChange(event) {
    setTaskContent(event.target.value);
  }

  function addTask() {
    props.taskAdder(taskContent);
    setTaskContent("");
  }

  return (
    <div className="input-wrapper">
      <input type="text" value={taskContent} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
