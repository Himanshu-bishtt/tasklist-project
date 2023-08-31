import { TodoItemArray } from "../types/types";
import TaskItem from "./TaskItem";
import Button from "./UI/Button";

const TaskList: React.FC<{ items: TodoItemArray }> = ({ items }) => {
  if (items.length === 0)
    return <h2 className="text-red-500 font-bold text-xl">No items</h2>;

  return (
    <div className="flex flex-col items-center gap-y-3 justify-center w-full bg-slate-900 text-white py-8 px-6 my-5 rounded-lg">
      <h2 className="text-xl text-center font-bold">Task Items</h2>
      <ul className="w-full">
        {items.map((item, i: number) => (
          <TaskItem
            key={`task-list-item-${i}`}
            text={item.text}
            isComplete={item.isComplete}
            priority={item.priority}
          />
        ))}
      </ul>

      <Button text="Create new task" />
    </div>
  );
};

export default TaskList;
