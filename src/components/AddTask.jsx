import Error from "./Error";

import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      setError(true);
      return;
    }

    setError(false);

    const taskObject = { task, completed: false };

    taskObject.id = generateId();

    setTasks([...tasks, taskObject]);

    setTask("");
  };

  return (
    <>
      {error && <Error />}
      <form
        onSubmit={handleSubmit}
        className="bg-valhalla mt-5 ml-5 mr-5 rounded-lg flex flex-col md:flex-row justify-between"
      >
        <label
          htmlFor="task"
          className="text-center md:basis-1/6 md:flex justify-center items-center text-white p-2 md:p-4 "
        >
          Task Description
        </label>
        <input
          id="task"
          type="text"
          placeholder="eg: Walk the dog..."
          className="text-valhalla placeholder:text-storm-grey rounded-md pl-3 pr-3 p-1 m-3 mt-2 md:m-5 md:w-full focus:outline-dark-tangerine"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Add Task"
          className="active:scale-90 hover:bg-dark-tangerine-hover bg-dark-tangerine font-medium cursor-pointer rounded-md p-1 m-3 mt-0 md:pl-4 md:pr-4 md:m-5 md:basis-1/6"
        ></input>
      </form>
    </>
  );
};

export default AddTask;
