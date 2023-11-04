import { useState } from "react";

const TodoTable = ({ datas, deleteTask }) => {
    const [doneList, setDoneList] = useState([]);

    const handleDone = (index) => {
    const newDoneList = [...doneList];
    if (!newDoneList.includes(index)) {
        newDoneList.push(index);
    } else {
        newDoneList.splice(newDoneList.indexOf(index), 1);
    }
    setDoneList(newDoneList);
    };
    return (
        <div className="table-box">
            <table>
                <thead>
                    <tr>
                    <th>Task</th>
                    <td>Priority</td>
                    <td>time</td>
                    <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((task, index) => (
                    <tr
                        key={index}
                        style={{
                        textDecoration: doneList.includes(index) ? "line-through" : "",
                        }}
                    >
                        <td>{task.inputText}</td>
                        <td>{task.priority}</td>
                        <td>{task.time}</td>
                        <td>
                        <button onClick={() => handleDone(index)}>{doneList.includes(index) ? "Undone":"Done"}</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoTable;