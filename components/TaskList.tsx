import React from "react";
import { Task } from "@/types";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
};

const TaskList: React.FC<Props> = ({ tasks, removeTask, toggleTaskDone }) => {
  if (tasks.length === 0) {
    return (
      <p className="mt-5 italic text-gray-500">Nie ma zadań do wyświetlenia.</p>
    );
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
