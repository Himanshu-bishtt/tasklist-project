import { Dispatch, useRef } from "react";
import Button from "./UI/Button";
import { TodoItem } from "../types/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const NewTaskItem: React.FC<{
  onAddTask: Dispatch<TodoItem>;
  setShowForm: Dispatch<boolean>;
}> = ({ onAddTask, setShowForm }) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const priorityRef = useRef<HTMLSelectElement | null>(null);

  return (
    <div className="isolate w-3/4 bg-slate-800 text-white px-6 py-24 sm:py-8 lg:px-8 my-6 rounded-lg">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight ">Add new task</h2>
      </div>
      <form className="mx-auto mt-6 max-w-xl sm:mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold leading-6"
            >
              Text
            </label>
            <div className="mt-2.5">
              <textarea
                name="text"
                id="text"
                rows={2}
                ref={textRef}
                className="block w-full rounded-md border-0 px-1.5 py-2 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Enter text..."
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6"
            >
              Priority
            </label>
            <div className="mt-2.5">
              <select
                name="priority"
                className="block w-full  bg-white border-0 px-1.5 py-2 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
                ref={priorityRef}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            text="Add Task"
            classname="w-full"
            onClick={(event) => {
              event.preventDefault();
              const textValue = textRef.current?.value;
              const priorityValue = priorityRef.current?.value;
              if (textValue?.length === 0) return;
              onAddTask({
                text: textValue,
                priority: priorityValue,
                isComplete: false,
              });
              setShowForm(false);
              toast.success("Successfully added task", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
          />
          <Button
            text="Cancel"
            classname="w-full bg-transparent border border-sky-600 hover:bg-sky-400"
            onClick={() => {
              setShowForm(false);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default NewTaskItem;
