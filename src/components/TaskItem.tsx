import { TodoItem } from "../types/types";
import { FaArrowRight, FaPencilAlt } from "react-icons/fa";

const TaskItem: React.FC<TodoItem> = ({ id, text, isComplete, priority }) => {
  return (
    <figure
      title={id}
      className={`flex flex-row justify-between items-center w-full shadow-lg shadow-slate-900 text-white py-3 px-4 rounded-md my-5 ${
        isComplete ? "bg-green-900" : "bg-slate-700"
      }`}
    >
      <FaArrowRight />
      <p className="w-3/4 text-base truncate">{text}</p>
      <h3 className="w-20 bg-red-700 text-white text-center rounded-full py-1 shadow">
        {priority}
      </h3>
      <a href="#" title="Edit">
        <FaPencilAlt />
      </a>
    </figure>
  );
};

export default TaskItem;
