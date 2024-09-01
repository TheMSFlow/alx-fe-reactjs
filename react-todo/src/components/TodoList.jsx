import React from 'react'
import { useState } from 'react'

const initialTodos = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete React project", completed: false },
    { id: 3, task: "Read a book", completed: false },
    { id: 4, task: "Exercise", completed: false },
    { id: 5, task: "Call a friend", completed: false },
    { id: 6, task: 'cook', completed: false }
]


const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [newTask, setNewTask] = useState("");

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const addTodo = () => {
        if (newTask.trim() === "") return;

        const newTodo = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1, // Generates a new ID
            task: newTask,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setNewTask(""); // Clear the input field
    };

    return (
        <>
            <h1>TodoList</h1>

            <div>
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    placeholder="Add a new task..."
                    style={{ marginRight: '10px' }}
                />
                <button onClick={addTodo} style={{ cursor: 'pointer' }}>
                    Add Todo
                </button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ listStyleType: 'none', marginBottom: '10px', textAlign: 'left' }}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{ 
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                marginLeft: '8px',
                                cursor: 'pointer'
                            }}>
                                {todo.task}
                            </span>
                        </label>
                        <button 
                            onClick={() => deleteTodo(todo.id)}
                            data-testid={`delete-button-${todo.id}`}  
                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;