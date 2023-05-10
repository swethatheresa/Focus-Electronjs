import React, { useState, useEffect } from 'react';
import './Stats.css';

function Stats({ tasks}) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="stats-container">
      <div className="stats-box completed-box">
        <span className="stats-count">{completedTasks}</span>
        <span className="stats-label">Completed Tasks</span>
      </div>
      <div className="stats-box pending-box">
        <span className="stats-count">{pendingTasks}</span>
        <span className="stats-label">Pending Tasks</span>
      </div>
    </div>
  );
}

export default Stats;
