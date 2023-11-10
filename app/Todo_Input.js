"use client"
import React, { useState } from 'react';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleTimeChange = (e) => {
    setHours(e.target.value);
  };

  const handleAddTask = () => {
    if (task && priority && time) {
      const newTask = {
        id: tasks.length + 1,
        task: task,
        priority: priority,
        time: time,
        isDone: false,
      };
      
      setTasks([...tasks, newTask]);
      setTask('');
      setPriority('');
      setTime('');
    }
  };

  const handleTaskDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const sortedTasks = tasks.sort((a, b) => +a.priority - +b.priority);



  return (
    <div>
            <div className="input-wrapper">
                <label htmlFor="taskInput">Task:</label>
                <input
                    type="text"
                    id="taskInput"
                    value={task}
                    onChange={handleTaskChange}
                    placeholder="Enter your task..."
                 />
            </div>
            <div className="input-wrapper">
                <label htmlFor="prioritySelect">Priority:</label>
                <select 
                    id="prioritySelect" 
                    value={priority} 
                    onChange={handlePriorityChange}
                >
                    <option value="">Select Priority</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
               </select>
            </div>
            <div className="time-input-container">
                <label htmlFor="timeInput">Hours:</label>
                <input
                    type="time"
                    className="time-input"
                    placeholder="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <button className="add_button" onClick={handleAddTask}>Add Task</button>
        <table className="task-table" border="1">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Hours</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sortedTasks.map((task) => (
                    <tr key={task.id}>
                      <td style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.task}</td>
                      <td style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.priority}</td>
                      <td style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.time}</td>
                      <td style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.isDone ? "Done":"Not Done"}</td>
                      <td>
                        <button onClick={() => handleTaskDone(task.id)}>{task.isDone ? 'Undone' : 'Done'}</button>
                        <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
                      </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default TodoInput;
