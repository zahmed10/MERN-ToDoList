import React, { useState } from 'react';

const TodoList = (props) => {
    const[task, setTask] = useState("");
    const[check, setCheck] = useState(false)
    const [taskList, setTaskList] = useState([]);

    const handleTask = (e) => {
        setTask(e.target.value);

    }

    const handleForm = (e) => {
        e.preventDefault();
        setTaskList([{"task": task, "check": check}, ...taskList]);
        setTask("");
    }

    const handleCheck = (idx) => {
        const completedTask = taskList.map((task, i) => {

            if(idx === i) {
                task.check = !task.check;
            } 
            return task;
        })
        setTaskList(completedTask);

    }

    return (
        <div>
            {/* {JSON.stringify(taskList)} */}
            <form onSubmit={handleForm}>
                <div>

                <input type="text" onChange={handleTask} value={task}/>
                </div>
                <input type="submit" value="Add"/>

            </form>
            <div>
                {taskList.map( (task, i) => {
                    return <div key={i}>
                        {

                            task.check ? 
                            <p><strike>{task.task}</strike></p>:
                        <p>{task.task}</p>
                        }
                        {/* <h3>Welcome, please submit the form.</h3>  */}

                        
                        <p>{task.check}</p>
                        <form ><input type="checkbox" onClick={(e) => handleCheck(i)} /></form>
                    </div> 

                })}
            </div>
        </div>
    )
}

export default TodoList;