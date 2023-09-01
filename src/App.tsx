import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-8 flex bg-slate-800 gap-4 rounded-lg">
      {/* <TaskItemFilter /> */}
      <TaskList />
    </div>
  );
}

export default App;
