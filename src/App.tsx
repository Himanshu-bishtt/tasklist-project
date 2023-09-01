import "./App.css";
import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-4/5 mx-auto my-4 py-2 px-8 flex bg-slate-800 gap-4 rounded-lg">
      <TaskList />
      <ToastContainer />
    </div>
  );
}

export default App;
