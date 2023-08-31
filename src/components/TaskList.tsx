import { TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";

const TaskList: React.FC<{ items: TodoItemArray }> = ({ items }) => {
  if (items.length === 0)
    return <h2 className="text-red-500 font-bold text-xl">No items</h2>;
  return (
    <ul className="mt-5">
      {items.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          text={item.text}
          isComplete={item.isComplete}
          priority={item.priority}
        />
      ))}
    </ul>
  );
};

export default TaskList;
