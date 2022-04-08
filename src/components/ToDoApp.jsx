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

  return (
    <div className="whole-wrapper">
      <Input taskAdder={taskAdder} />
      <Table tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
