// "use client";
import React, { useState } from 'react';

interface AddTaskProps {
  addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {   
    addTask(taskText);
    setTaskText('');    
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="bg-blue-500 hover:bg-blue-700 active:scale-95 transform transition duration-200 ease-in-out text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;