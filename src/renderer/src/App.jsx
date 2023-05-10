import Task from "./components/TaskManager/Task"
import Stats from "./components/Stats/Stats"
import SetTimer from "./components/SetTimer/SetTimer"
import './App.css'
import React, { useState, useEffect } from 'react';
import TimerManager from "./components/TimerManager/TimerManager";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id, completed) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Task tasks={tasks} setTasks={setTasks} handleComplete={handleComplete} handleDelete={handleDelete}/>
      <div className="stats-body">
      <Stats tasks={tasks}/>
      <TimerManager />
      </div>
    </div>
  )
}

export default App
