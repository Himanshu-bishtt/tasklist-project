import { TodoItem } from "../types/types";

const TaskItem: React.FC<TodoItem> = ({ text, isComplete, priority }) => {
  return (
    <figure
      className={`flex flex-row justify-between items-center w-full text-white py-3 px-4 rounded-md my-5 ${
        isComplete ? "bg-green-400 line-through" : "bg-slate-600"
      }`}
    >
      <p className="w-48 truncate ">{text}</p>
      <h3 className="w-48 truncate">{`${
        isComplete ? "Completed" : "Not Completed"
      }`}</h3>
      <h3 className="w-20 bg-red-700 text-white text-center rounded-full p-1 shadow">
        {priority}
      </h3>
    </figure>
  );
};

export default TaskItem;
