import React, { useState } from 'react';
import './todo.css';

function Todo() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (value.trim()) { // Check if input is not empty
            setTodos([...todos, value]);
            setValue("");
        }
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Tasks</h2>
            
            <input 
                type="text" 
                id="task" 
                name="task" 
                value={value}
                onChange={handleChange} 
            />
            <button onClick={handleAddTodo}>Add Task</button>
            <div class="input-container">
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <br />
                        <button onClick={() => handleRemoveTodo(index)}>Done Task</button> {/* Button to remove task */}
                    </li>
                ))}
            </ul>
            </div>
            </div>
    );
}

export default Todo;
