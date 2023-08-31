import { TodoItem } from "../types/types";

const TaskItem: React.FC<TodoItem> = ({ id, text, isComplete, priority }) => {
  return (
    <figure className="flex flex-row justify-between items-center w-full bg-sky-400 text-white py-1 px-4 rounded-md my-2">
      <h2>{id}.</h2>
      <p>{text}</p>
      <h3>{`${isComplete ? "Completed" : "Not Completed"}`}</h3>
      <h3 className="bg-red-500 text-white rounded-md p-1">{priority}</h3>
    </figure>
  );
};

export default TaskItem;
