import React, {useState} from "react";

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Nav from "../Nav";
import Form from '../Form';
import TaskItem from '../TaskItem';

import './App.css';

const App = () => {

  const [tasks, settasks] = useState([]);

  const handleTaskAddition = (task) => {
    settasks([...tasks, task]);
  }

  const removeHandler = (deletedTask) => () => {
    const newtasks = tasks.filter(task => task !== deletedTask);
    settasks([...newtasks]);
  }
  
  return (
    <div >
      <Nav />
      <div className='container'>
        <Paper elevation={3}>
          <div className="page-container">
            <Form onSubmit={handleTaskAddition}/>
            <div className="divider">
              <Divider />
            </div>
            <section>
              {
                tasks.map((iteam, index) => {
                  return (
                    <TaskItem key={index} iteam={iteam} onRemove={ removeHandler(iteam) }/>
                  )
                })
              }
            </section>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default App;
