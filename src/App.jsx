import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  console.log(todos)

  return (
    <div className='App'>
      <div className='inclusive-div'>
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList />
      </div>

      
    </div>
  )
}

export default App
