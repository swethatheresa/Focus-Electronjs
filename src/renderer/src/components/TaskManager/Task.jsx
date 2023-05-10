import React, { useState, useEffect } from 'react';
import './Task.css';

function Task({tasks, setTasks, handleDelete, handleComplete}) {
  
  const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <div className="task-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input type="text" value={newTask} onChange={handleInputChange} className="task-input" />
        <button type="submit" className="task-btn">Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleComplete(task.id, task.completed)}
                className="task-checkbox"
              />
              <span className={task.completed ? 'completed' : 'task-name'}>{task.name}</span>
            </label>
            <button onClick={() => handleDelete(task.id)} className="task-delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
