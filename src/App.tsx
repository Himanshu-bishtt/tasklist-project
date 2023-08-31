import "./App.css";
import TaskList from "./components/TaskList";
import { TodoItemArray } from "./types/types";

function App() {
  const items: TodoItemArray = [
    { id: 1, text: "Football match", isComplete: false, priority: "medium" },
    { id: 2, text: "Guitar practice", isComplete: true, priority: "low" },
    {
      id: 3,
      text: "Lunch with friends at Shipra Mall",
      isComplete: false,
      priority: "high",
    },
  ];

  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-8 flex bg-blue-200 gap-4 rounded-lg">
      {/* <TaskItemFilter /> */}
      <div className="w-full bg-blue-100 py-2 px-4 my-5 rounded-lg">
        <h2 className="text-xl mb-4 text-center font-bold">Task Items</h2>
        <TaskList items={items} />
      </div>
    </div>
  );
}

export default App;
