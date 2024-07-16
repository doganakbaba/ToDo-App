// Todo.js
import React, { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import '../App.css';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    };

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo,
        };
        onUpdateTodo(request);
        setEditable(false); // Reset editable state after updating
    };

    return (
        <div className='todo'>
            <div>
                {editable ? (
                    <input
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '380px' }}
                        className='todo-input'
                        type='text'
                    />
                ) : (
                    todo.content
                )}
            </div>
            <div>
                <IoIosRemoveCircle onClick={removeTodo} className='todo-icons' />
                {editable ? (
                    <FaCheck className='todo-icons' onClick={updateTodo} />
                ) : (
                    <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
                )}
            </div>
        </div>
    );
}

export default Todo;
