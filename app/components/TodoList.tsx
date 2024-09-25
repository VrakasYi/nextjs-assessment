import React from 'react';
import { Task } from '../types';

interface TodoListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md" 
          key={task.id}>
          <span 
            className="font-bold"
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <div className="flex space-x-5">
            <button 
              className="bg-gray-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-[160px]"
              onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Incomplete' : 'Mark complete'}
            </button>
            <button 
              className="bg-gray-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded "
              onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList