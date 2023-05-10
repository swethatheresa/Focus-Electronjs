import React, { useState } from 'react';
import SetTimer from '../SetTimer/SetTimer';
import './TimerManager.css';

function TimerManager() {
  const [minutes, setMinutes] = useState(0);

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value));
  };

  return (
    <div className='timer'>
      <label>
        Set Timer (minutes):
        <input type="number" value={minutes} onChange={handleMinutesChange} />
      </label>
      <SetTimer minutes={minutes} />
    </div>
  );
}

export default TimerManager;
