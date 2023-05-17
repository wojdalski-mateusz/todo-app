import React from "react";
import { Task } from "@/types";

type Props = {
  task: Task;
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
};

const TaskItem: React.FC<Props> = ({ task, removeTask, toggleTaskDone }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded shadow-md mb-3">
      <p
        className={task.isDone ? "line-through" : ""}
        onClick={() => toggleTaskDone(task.id)}
      >
        {task.content}
      </p>
      <button
        className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
        onClick={() => removeTask(task.id)}
      >
        ⌫
      </button>
    </div>
  );
};

export default TaskItem;
