import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="container h-screen mx-auto mt-20 font-poppins">
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
