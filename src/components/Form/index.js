import React, { useState } from "react";

import TextField from "../Input";
import Button from "../Button";

const Form = ({ onSubmit }) => {

  const [task, setTask] = useState("");

  const handleNewTaskUpdate = (event) => {
    setTask(event.target.value);
  }

  const handleTaskAddition = () => {
    onSubmit(task);
    setTask('');
  }

  return (
    <>
      <TextField label="Enter New Task" value={task} onChange={handleNewTaskUpdate}/>
      <Button onClick={handleTaskAddition} title={'Add'}/>
    </> 
  );
};

export default Form;
