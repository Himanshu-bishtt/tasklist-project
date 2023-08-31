import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { TodoItemArray } from "./types/types";

function App() {
  const items: TodoItemArray = [
    {
      text: "Football match at Noida Stadium",
      isComplete: false,
      priority: "medium",
    },
    { text: "Guitar practice", isComplete: true, priority: "low" },
    {
      text: "Lunch with friends at Shipra Mall",
      isComplete: false,
      priority: "high",
    },
  ];

  const [taskItems, setTaskItems] = useState(items);

  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-8 flex bg-slate-800 gap-4 rounded-lg">
      {/* <TaskItemFilter /> */}
      <TaskList items={taskItems} />
    </div>
  );
}

export default App;
