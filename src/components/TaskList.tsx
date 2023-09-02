import React, { Dispatch, useEffect, useRef, useState } from "react";
import { TodoItem, TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";
import Button from "./UI/Button";
import NewTaskForm from "./NewTaskForm";
import { v4 as uuidv4 } from "uuid";
import ErrorMessage from "./UI/ErrorMessage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const TaskList = () => {
  const items: TodoItemArray = [];

  const [showForm, setShowForm] = useState<boolean>(false);
  const [taskItems, setTaskItems] = useState<TodoItem[]>(items);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    toast.info("Tasklist updated", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, [taskItems]);

  const addNewTaskHandler = (data: TodoItem) => {
    setTaskItems((items) => [...items, { ...data, id: uuidv4() }]);
  };

  const newTaskItemHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowForm((prev) => !prev);
  };

  const taskDeleteHandler: Dispatch<string | undefined> = (id?: string) => {
    setTaskItems((items) => items.filter((item) => item.id !== id));
    toast.error("Successfully deleted task", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center w-full bg-slate-900 text-white shadow-lg py-8 px-6 my-5 rounded-lg">
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
              onTaskDelete={taskDeleteHandler}
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
