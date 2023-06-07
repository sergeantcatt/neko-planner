/*
    Test component for tasks.
*/

import React from 'react';
import {useEffect, useState} from 'react';

const Task = ({task}) => {
    

    // useEffect(() => {

    // }, []);

    return(
        <>
            <p>{task.name}</p>
        </>
    )
}



export default Task