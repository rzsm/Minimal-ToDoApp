import React from "react";
import Input from "./Input";
import Table from "./Table";

export default class ToDoApp extends React.Component {
  state = {
    tasks: [
      {
        content: "Task1",
      },
      {
        content: "Task 2",
      },
    ],
  };

  taskAdder(newTask) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          content: newTask,
        },
      ],
    });
  }

  deleteTask(index) {
    let updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks,
    });
  }

  editTask(number) {
    document.querySelector(`.task-${number}`).style.display = "none";
    document.querySelector(`.edit-input-${number}`).style.display = "inline";
    document.querySelector(`.change-btn-${number}`).style.display = "inline";
  }

  updateTask(index) {
    let updatedTasks = [...this.state.tasks];
    updatedTasks[index].content = document.querySelector(
      `.edit-input-${index + 1}`
    ).value;
    this.setState({
      ...this.state,
      tasks: updatedTasks,
    });
    document.querySelector(`.task-${index + 1}`).style.display = "inline";
    document.querySelector(`.edit-input-${index + 1}`).style.display = "none";
    document.querySelector(`.change-btn-${index + 1}`).style.display = "none";
  }

  render() {
    return (
      <div className="whole-wrapper">
        <Input taskAdder={this.taskAdder.bind(this)} />
        <Table
          tasks={this.state.tasks}
          deleteTask={this.deleteTask.bind(this)}
          editTask={this.editTask.bind(this)}
          updateTask={this.updateTask.bind(this)}
        />
      </div>
    );
  }
}
