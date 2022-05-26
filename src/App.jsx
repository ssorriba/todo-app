import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="container h-screen mx-auto mt-10 md:mt-20 font-poppins">
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
