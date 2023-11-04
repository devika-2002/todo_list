"use client"
import {useState} from "react";
import TodoInput from "./TodoInput";
import TodoTable from "./TodoTable";
import "./globals.css";

const page=()=>{
    const [data, setData] = useState([]);

    const addTask = (newTask) => {
      setData([...data, newTask]);
    };
  
    const deleteTask = (id) => {
      const updatedTasks = data.filter((task, index) => index !== id);
      setData(updatedTasks);
    };
    return(
        <div className="main-container">
            <TodoInput AddTask={addTask} />
            <TodoTable datas={data} deleteTask={deleteTask}/>
        </div>
    )
}
export default page;