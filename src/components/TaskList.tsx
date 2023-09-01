import { useState } from "react";
import { TodoItem, TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";
import Button from "./UI/Button";
import NewTaskForm from "./NewTaskForm";

const TaskList = () => {
  const items: TodoItemArray = [
    {
      text: "Football match at Noida Stadium",
      isComplete: false,
      priority: "medium",
    },
    {
      text: "Guitar practice with rohan at plaza",
      isComplete: true,
      priority: "low",
    },
    {
      text: "Lunch with friends at Shipra Mall",
      isComplete: false,
      priority: "high",
    },
  ];

  const [showForm, setShowForm] = useState<boolean>(false);
  const [taskItems, setTaskItems] = useState(items);

  const addNewTaskHandler = (data: TodoItem) => {
    setTaskItems((items) => [...items, data]);
  };

  const newTaskItemHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowForm((prev) => !prev);
  };

  if (items.length === 0)
    return <h2 className="text-red-500 font-bold text-xl">No items</h2>;

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center w-full bg-slate-900 text-white py-8 px-6 my-5 rounded-lg">
      <h2 className="text-2xl text-center font-bold">Your tasks today</h2>
      <ul className="w-full">
        {taskItems.map((item, i: number) => (
          <TaskItem
            key={`task-list-item-${i}`}
            text={item.text}
            isComplete={item.isComplete}
            priority={item.priority}
          />
        ))}
      </ul>
      {!showForm && (
        <Button text="Create new task" onClick={newTaskItemHandler} />
      )}
      {showForm && (
        <NewTaskForm onAddTask={addNewTaskHandler} setShowForm={setShowForm} />
      )}
    </div>
  );
};

export default TaskList;
