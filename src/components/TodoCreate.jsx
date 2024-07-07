import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {

  const[newTodo,setNewTodo] = useState('');
  const createTodo = () =>{
    if(!newTodo) return;

    const request = {
      id : Math.floor(Math.random() * 999999),
      content : newTodo

    }
    onCreateTodo(request)
  }

  return (
    <div className='todo-create'>
        <input
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        className='todo-input' type='text' placeholder='Enter To Do' />
        <button onClick={createTodo} className='todo-create-button' >Create New ToDo</button>
    </div>
  )
}

export default TodoCreate