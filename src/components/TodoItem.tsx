import { TodoItemInterface } from '../types/todo';

interface Props {
    todo: TodoItemInterface;
    onToggle: (id: number) => void;
}

export function TodoItem({ todo, onToggle }: Props) {
    return (
        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                style={{ marginRight: '10px' }}
            />
            <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
        {todo.text}
    </span>
        </div>
    );
}

