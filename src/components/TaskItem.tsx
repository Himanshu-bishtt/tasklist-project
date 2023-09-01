import { useState } from "react";
import { TodoItem } from "../types/types";
import { FaArrowRight, FaTrash } from "react-icons/fa";

const TaskItem: React.FC<TodoItem> = ({ id, text, isComplete, priority }) => {
  const [checked, setChecked] = useState<boolean>(isComplete);

  const isCompleteCheckboxHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.checked) setChecked((prev) => !prev);
    else setChecked((prev) => !prev);
  };
  return (
    <figure
      title={id}
      className={`flex flex-row justify-between items-center w-full shadow-lg shadow-slate-900 text-white py-3 px-4 rounded-md my-5 ${
        checked ? "bg-green-900 line-through" : "bg-slate-700"
      }`}
    >
      <FaArrowRight />
      <p className="w-3/4 ml-4 text-base truncate">{text}</p>
      <h3 className="w-20 bg-red-700 text-white text-center rounded-full py-1 shadow">
        {priority}
      </h3>
      <div className="flex gap-x-3 ml-5">
        <input
          type="checkbox"
          name="isCompletedCheckbox"
          id="isCompletedCheckbox"
          checked={checked}
          onChange={isCompleteCheckboxHandler}
        />
        <FaTrash title="delete" />
      </div>
    </figure>
  );
};

export default TaskItem;
