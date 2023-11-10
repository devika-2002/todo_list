"use client"
import { useState } from "react";

const  TodoInput=({AddTask})=>{
    const [inputText, setInputText] = useState("");
    const [priority, setPriority] = useState("");
    const [time, setTime] = useState("");

    const handleInputChange = (e) => {
    setInputText(e.target.value);
    };

    const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    };
    const handleTimeChange = (e) => {
    setTime(e.target.value);
    };

    const handleAddTask = () => {
    if (inputText && priority && time) {
        const newTask = { inputText, priority, time }; 
        AddTask(newTask);
        setInputText("");
        setPriority("");
        setTime(""); 
    }
    };

    return (
        <div className="box">
            <input className='input-text' type='text' placeholder='Enter your task'
            value={inputText}
            onChange={handleInputChange}
            />

            <select className="select-dropdown" value={priority} onChange={handlePriorityChange}>
                <option value="">Select Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <input className='Time-set' type='time'
            value={time}
            onChange={handleTimeChange}
            />
            
            <button className='Add-button' onClick={handleAddTask}>Add</button>
        </div>
    )
}

export default TodoInput;
