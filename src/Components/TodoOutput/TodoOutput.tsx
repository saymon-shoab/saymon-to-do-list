import React from 'react';
import './TodoOutput.css'

interface iProps{
    task:string,
}

const TodoOutput = ({task}:iProps) => {
    return (
        <div>
            <h2>{task}</h2>
        </div>
    );
};

export default TodoOutput;