import { Dispatch, useState } from "react";
import { FaArrowRight, FaTrash } from "react-icons/fa";

const TaskItem: React.FC<{
  id?: string;
  text?: string;
  isComplete: boolean;
  priority?: string;
  onTaskDelete: Dispatch<string | undefined>;
}> = ({ id, text, isComplete, priority, onTaskDelete }) => {
  const [checked, setChecked] = useState<boolean>(isComplete);

  const isCompleteCheckboxHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.checked) setChecked((prev) => !prev);
    else setChecked((prev) => !prev);
  };

  const taskDeleteHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (confirm("Sure you want to delete the task?")) onTaskDelete(id);
  };

  return (
    <figure
      title={id}
      className={`flex flex-row justify-between items-center w-full shadow-lg shadow-slate-900 text-white py-3 px-4 rounded-md my-5 ${
        checked ? "bg-green-900" : "bg-slate-700"
      }`}
    >
      <FaArrowRight />
      <div className="w-3/4 ml-4">
        <p className="text-base truncate">{text}</p>
        <p className="text-xs text-slate-400">{id}</p>
      </div>
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
        <a href="#" onClick={taskDeleteHandler}>
          <FaTrash title="delete" />
        </a>
      </div>
    </figure>
  );
};

export default TaskItem;
