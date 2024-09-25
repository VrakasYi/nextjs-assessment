// import styles from "./globals.css"
"use client";
import TodoList from "./components/TodoList"
import AddTask from "./components/AddTask";
import React, { useState } from 'react';
import { Task } from './types';
import "./globals.css"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [id, setId] = useState(0)

  const addTask = (text: string) => {
    const newTask: Task = {
      id: `task-${id}`,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setId(id + 1);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <header className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TO DO ASSESSMENT APP</h1>
        <AddTask addTask={addTask} />        
      </header>
      <hr className="border-t-4 border-blue-400 my-4"></hr>

      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </main>
  );
}
