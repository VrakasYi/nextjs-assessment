import React from 'react';
import { Task } from '../types';

interface TodoListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList