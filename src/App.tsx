import "./App.css";
import TaskList from "./components/TaskList";
import { TodoItemArray } from "./types/types";

function App() {
  const items: TodoItemArray = [
    { id: 1, text: "Football match", isComplete: false, priority: "medium" },
    { id: 2, text: "Guitar practice", isComplete: true, priority: "low" },
    { id: 3, text: "Lunch with friends", isComplete: false, priority: "high" },
  ];

  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-4 flex bg-neutral-300 gap-4 rounded-sm">
      {/* <TaskItemFilter /> */}
      <div className="w-full bg-neutral-100 py-2 px-4">
        <h2 className="text-xl mb-4">Todo container</h2>
        <TaskList items={items} />
      </div>
    </div>
  );
}

export default App;
