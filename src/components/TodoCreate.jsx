import React from 'react'
import '../App.css';

function TodoCreate() {
  return (
    <div className='todo-create'>
        <input className='todo-input' type='text' placeholder='Enter To Do' />
        <button className='todo-create-button' >Create New ToDo</button>
    </div>
  )
}

export default TodoCreate