import React, { useState } from 'react';
import TodoOutput from '../TodoOutput/TodoOutput';
import './TodoInput.css'

// interface iTaskList{
//     task:string;
// }

const TodoInput = () => {
    
    const [task, setTask] = useState("")
    const [taskList , setTaskList] = useState<string[]>([])

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTask(event.target.value)
       console.log(task)
    }

    const handleAddTask= () => {
        setTaskList([...taskList, task])
        setTask("")
    }
   console.log('taskList', taskList )  
  
    return (
    <>
        
        <div className="main-div">
        <div className="center-div">
            <h1>To Do List</h1>
            <br/>
              <input value={task} onChange={handleInput}  type="text" placeholder="add a task" />
              <button onClick={handleAddTask} > + </button>
            
              {
                  taskList.map((singleTask)=><TodoOutput key={singleTask} task={singleTask}></TodoOutput>)
              }
         
              
        </div>
    </div>

    </>
    );
};

export default TodoInput;