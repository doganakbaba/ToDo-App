import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';

function Todo({ todo }) {
    return (
        <div className='todo'>
            <div>
                {todo.content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <FaEdit className='todo-icons' />


            </div>
        </div>
    )
}

export default Todo