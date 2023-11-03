"use client"
import React, { useState } from 'react';

const Todo_Input = () => {
  const [priority, setPriority] = useState('');
  const [task, setTask] = useState('');

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <h2>Todo List</h2>
        <input
          type="text"
          id="taskInput"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter your task..."
        />
        <label htmlFor="prioritySelect">Priority:</label>
        <select id="prioritySelect" value={priority} onChange={handlePriorityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default Todo_Input;
