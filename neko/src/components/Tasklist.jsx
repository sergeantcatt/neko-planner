/*
    Test component for tasklist of user. 
*/

import React from 'react';
import {useState, useEffect} from 'react';
import Task from './Task';


const Tasklist = () => {

    const [tasks, setTasks] = useState([
        {
            name: "sample",
            isComplete: false
        }
    ]);

    const addTask = name => {
        const newTasks = [...tasks, { name }];
        setTasks(newTasks);
    };

    const markTask = index => {
        const newTasks = [...tasks];
        newTasks[index].isComplete = true;
        setTasks(newTasks);
      };
    
      const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
      };

      useEffect(() => {
        addTask("meow");
      }, [])
    

    return(
        <>
            {tasks.map((task, index) => (
                <Task 
                    task={task}
                />
            ))}

            {/* <button onClick={addTask("rawr")}>
            </button> */}
        </>
    )
}



export default Tasklist