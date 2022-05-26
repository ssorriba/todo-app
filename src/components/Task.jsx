import { useState } from "react";

const Task = ({ tasks, setTasks, task, taskId, index, completed }) => {
  const [isComplete, setIsComplete] = useState(completed);

  const handleComplete = () => {
    const answer = confirm("Do you want to complete this task?");
    if (answer) {
      setIsComplete(true);
    }
  };

  const handleDelete = () => {
    const answer = confirm("Do you want to delete this task?");

    if (answer) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="task grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-4">
        <p
          className={`text-dark-tangerine mt-3 ml-5 md:mt-5 md:ml-5 md:text-3xl text-2xl row-start-1 row-end-2 col-start-1 col-end-3 md:col-end-4 ${
            isComplete ? "line-through text-storm-grey" : ""
          }`}
        >
          Task #{index + 1}
        </p>
        <p
          className={`text-cold-turkey ml-5 md:ml-5 md:mt-2 row-start-2 row-end-3 col-start-1 col-end-3 md:row-end-4 md:col-end-4 ${
            isComplete ? "line-through text-storm-grey" : ""
          }`}
        >
          {task}
        </p>
        <div className="col-start-1 col-end-3 grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3 md:mt-2">
          <button
            type="button"
            className={`${
              isComplete
                ? "bg-storm-grey text-white"
                : "bg-dark-tangerine hover:bg-dark-tangerine-hover"
            } active:scale-90 font-medium box-border col-start-1 col-end-2 rounded-md m-1 ml-5 mr-3 md:col-start-1 md:col-end-3 md:mr-5 md:ml-5 `}
            onClick={handleComplete}
            disabled={isComplete}
          >
            Complete
          </button>
          <button
            type="button"
            className="font-medium hover:bg-fire-engine-red-hover active:scale-90 text-white box-border col-start-2 col-end-3 bg-fire-engine-red rounded-md m-1 ml-3 mr-5 md:col-start-1 md:col-end-3 md:mr-5 md:ml-5"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <hr className="mt-3 ml-2 mr-2 border-storm-grey " />
    </>
  );
};

export default Task;
