import { FormEvent, useState } from "react";
import { Category } from "@/types";

type Props = {
  addTask: (content: string, category: Category) => void;
};

const TaskForm: React.FC<Props> = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (category === "") {
      return;
    }
    addTask(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <form onSubmit={handleAddTask} className="space-y-4">
      <input
        className="border rounded p-2 w-full"
        type="text"
        value={value}
        placeholder="Dodaj nowe zadanie..."
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        className="border rounded p-2 w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        <option value="" disabled selected>
          Wybierz kategorię...
        </option>
        {Object.values(Category).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="bg-green-500 text-white rounded px-2 py-1 hover:bg-green-600 w-full"
        type="submit"
      >
        Dodaj
      </button>
    </form>
  );
};

export default TaskForm;
