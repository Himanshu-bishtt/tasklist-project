import { useState } from "react";
import { TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";
import Button from "./UI/Button";
import NewTaskItem from "./NewTaskItem";

const TaskList: React.FC<{ items: TodoItemArray }> = ({ items }) => {
  const [showForm, setShowForm] = useState(false);

  const newTaskItemHandler = () => {
    setShowForm((prev) => !prev);
  };

  if (items.length === 0)
    return <h2 className="text-red-500 font-bold text-xl">No items</h2>;

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center w-full bg-slate-900 text-white py-8 px-6 my-5 rounded-lg">
      <h2 className="text-2xl text-center font-bold">Your tasks today</h2>
      <ul className="w-full">
        {items.map((item, i: number) => (
          <TaskItem
            key={`task-list-item-${i}`}
            text={item.text}
            isComplete={item.isComplete}
            priority={item.priority}
          />
        ))}
      </ul>

      <Button
        text="Create new task"
        onClick={newTaskItemHandler}
        showForm={showForm}
      />
      {showForm && <NewTaskItem />}
    </div>
  );
};

export default TaskList;
