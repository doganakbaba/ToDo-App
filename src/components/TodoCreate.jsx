import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState('');
  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo

    }
    onCreateTodo(request)
    setNewTodo('') //write this or create a function
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      createTodo();
    }
  }

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyPress}
        className='todo-input' type='text' placeholder='Enter To Do' />
      <button onClick={createTodo} className='todo-create-button' >Create New ToDo</button>
    </div>
  )
}

export default TodoCreate;