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

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo)=> {
      if(todo.id !== newTodo.id){
        return todo;
      }
      return newTodo;
      

    })
    setTodos([...updatedTodos])
  }

  console.log(todos)

  return (
    <div className='App'>
      <div className='inclusive-div'>
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList onRemoveTodo = {removeTodo} todos = {todos} onUpdateTodo = {updateTodo} />
      </div>

      
    </div>
  )
}

export default App
