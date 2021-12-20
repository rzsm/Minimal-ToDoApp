import React from "react";
import TableHeader from "./TableHeader";
import TaskRow from "./TaskRow";

export default function Table(props) {
  let tasks = props.tasks.map((task, index) => (
    <TaskRow number={index + 1} content={task.content} key={index} deleteTask={props.deleteTask} editTask={props.editTask} updateTask={props.updateTask}/>
  ));
  return (
    <table>
      <TableHeader />
      <tbody>{tasks}</tbody>
    </table>
  );
}
