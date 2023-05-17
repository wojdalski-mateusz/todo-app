"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { Task, Category } from "@/types";
import { useState } from "react";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Category | "all">("all");

  const addTask = (content: string, category: Category | "") => {
    if (content.trim() === "" || category === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      content: content,
      isDone: false,
      category: category,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.category === filter
  );

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-xl mt-10">
        <h1 className="text-center text-3xl font-bold text-blue-500 mb-5">
          LISTA ZADAŃ
        </h1>
        <TaskForm addTask={addTask} />
        <select
          className="my-5"
          value={filter}
          onChange={(e) => setFilter(e.target.value as Category | "all")}
        >
          <option value="all">Wszystkie</option>
          {Object.values(Category).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <TaskList
          tasks={filteredTasks}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
      </div>
    </div>
  );
};

export default Home;
