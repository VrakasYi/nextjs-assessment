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
    <div
    className="input"
    >
      <input
        className="inputBorder"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="bg-gray-500 hover:bg-blue-800 active:scale-95 transform transition duration-200 
        ease-in-out text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl"
        onClick={handleAddTask}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
        //tabIndex="0" // Ensures the button can be focused and activated via keyboard
        >Add Task
      </button>
    </div>
  );
};

export default AddTask;