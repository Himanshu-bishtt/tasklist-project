import "./App.css";
import { TodoItem } from "./types/types";

const items: TodoItem[] = [
  { id: 1, text: "Dummy text", isComplete: false, priority: "medium" },
  { id: 2, text: "Dummy text", isComplete: true, priority: "low" },
  { id: 3, text: "Dummy text", isComplete: false, priority: "high" },
];

function App() {
  console.log(items);
  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-4 flex bg-neutral-300 gap-4 rounded-sm">
      <div className="w-1/5 bg-neutral-100 py-2 px-4">Sidebar</div>
      <div className="w-4/5 bg-neutral-100 py-2 px-4">Todo container</div>
    </div>
  );
}

export default App;
