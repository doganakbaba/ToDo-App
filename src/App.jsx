import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo)=> todo.id!== todoId)]);
    
  }

  console.log(todos)

  return (
    <div className='App'>
      <div className='inclusive-div'>
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList onRemoveTodo = {removeTodo} todos = {todos} />
      </div>

      
    </div>
  )
}

export default App
