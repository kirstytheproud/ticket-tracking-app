import React from "react";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";
import { useState } from "react";

const TaskManager = ({ changeCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p> Tickets: {counter}</p>
      <Form addTask={handleIncrement} />
      <ToDoList ammend={handleDecrement} />
    </div>
  );
};

export default TaskManager;
