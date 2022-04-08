import React from "react";
import TableHeader from "./TableHeader";
import TaskRow from "./TaskRow";

export default function Table(props) {
  let tasks = props.tasks.map((task, index) => (
    <TaskRow
      number={index + 1}
      content={task.content}
      key={index}
      setTasks={props.setTasks}
    />
  ));

  return (
    <table>
      <TableHeader />
      <tbody>{tasks}</tbody>
    </table>
  );
}
