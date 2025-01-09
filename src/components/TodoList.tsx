import { useState } from 'react';
import { TodoItem as TodoItemType } from '../types/todo';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState<TodoItemType[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        const todo: TodoItemType = {
            id: Date.now(),
            text: newTodo,
            completed: false
        };

        setTodos([...todos, todo]);
        setNewTodo('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    style={{
                        padding: '8px',
                        marginRight: '10px',
                        width: '70%'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#646cff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add Todo
                </button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                    />
                ))}
            </div>
        </div>
    );
}

