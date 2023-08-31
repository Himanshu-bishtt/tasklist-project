import "./App.css";
import { TodoItem } from "./types/types";

const items: TodoItem[] = [
  { id: 1, text: "Dummy text", isComplete: false, priority: "medium" },
  { id: 2, text: "Dummy text", isComplete: true, priority: "low" },
  { id: 3, text: "Dummy text", isComplete: false, priority: "high" },
];

function App() {
  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-4 flex bg-neutral-300 gap-4 rounded-sm">
      <div className="w-auto bg-neutral-100 py-2 px-4">
        <h2 className="text-xl mb-4">Items filter</h2>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <label htmlFor="completed">Completed</label>
            <select
              name="completed"
              id="completed"
              className="bg-sky-500 text-white border-none"
            >
              <option value="yes">Yes</option>
              <option value="no" defaultChecked>
                No
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              className="bg-purple-400 text-white border-none"
            >
              <option value="low" defaultChecked>
                Low
              </option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-4/5 bg-neutral-100 py-2 px-4">
        <h2 className="text-xl">Todo container</h2>
      </div>
    </div>
  );
}

export default App;
