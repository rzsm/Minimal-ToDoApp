import React from "react";
import Input from "./Input";
import Table from "./Table";

export default function ToDoApp() {
  const [tasks, setTasks] = React.useState([
    {
      content: "Task 1",
    },
    {
      content: "Task 2",
    },
  ]);

  function taskAdder(newTask) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        content: newTask,
      },
    ]);
  }

  function deleteTask(index) {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function editTask(number) {
    document.querySelector(`.task-${number}`).style.display = "none";
    document.querySelector(`.edit-input-${number}`).style.display = "inline";
    document.querySelector(`.change-btn-${number}`).style.display = "inline";
  }

  function updateTask(index) {
    let updatedTasks = [...tasks];

    updatedTasks[index].content = document.querySelector(
      `.edit-input-${index + 1}`
    ).value;

    setTasks(updatedTasks);
    document.querySelector(`.task-${index + 1}`).style.display = "inline";
    document.querySelector(`.edit-input-${index + 1}`).style.display = "none";
    document.querySelector(`.change-btn-${index + 1}`).style.display = "none";
  }

  return (
    <div className="whole-wrapper">
      <Input taskAdder={taskAdder} />
      <Table
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        updateTask={updateTask}
      />
    </div>
  );
}
