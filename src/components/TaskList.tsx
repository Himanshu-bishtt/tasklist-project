import { useState } from "react";
import { TodoItem, TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";
import Button from "./UI/Button";
import NewTaskForm from "./NewTaskForm";
import { v4 as uuidv4 } from "uuid";
import ErrorMessage from "./UI/ErrorMessage";

const TaskList = () => {
  console.log("Tasklist");
  const items: TodoItemArray = [
    {
      id: "1",
      text: "Football match at Noida Stadium",
      isComplete: false,
      priority: "medium",
    },
    {
      id: "2",
      text: "Guitar practice with rohan at plaza",
      isComplete: true,
      priority: "low",
    },
    // {
    //   id: "3",
    //   text: "Lunch with friends at Shipra Mall",
    //   isComplete: false,
    //   priority: "high",
    // },
  ];

  const [showForm, setShowForm] = useState<boolean>(false);
  const [taskItems, setTaskItems] = useState(items);

  const addNewTaskHandler = (data: TodoItem) => {
    setTaskItems((items) => [...items, { ...data, id: uuidv4() }]);
  };

  const newTaskItemHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center w-full bg-slate-900 text-white py-8 px-6 my-5 rounded-lg">
      <h2 className="text-2xl text-center font-bold">Your tasks today</h2>
      <ul className="w-full">
        {taskItems.length !== 0 ? (
          taskItems.map((item, i: number) => (
            <TaskItem
              key={`task-list-item-${i}`}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              priority={item.priority}
            />
          ))
        ) : (
          <ErrorMessage message="Hurray! No tasks" />
        )}
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
