import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './App.css';

function App() {


  return (
    <div className='App'>
      <div className='inclusive-div'>
        <TodoCreate />
        <TodoList/>
      </div>
    </div>
  )
}

export default App
