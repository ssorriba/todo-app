import Task from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <>
      {tasks && tasks.length ? (
        <div className="bg-valhalla mt-5 ml-5 mr-5 rounded-lg">
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              index={index}
              tasks={tasks}
              setTasks={setTasks}
              task={task.task}
              taskId={task.id}
              completed={task.completed}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-dark-tangerine font-medium text-4xl m-10 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl ">
            You don't have any tasks yet
          </h2>
          <h3 className="text-valhalla mt-20 text-2xl m-10 xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl">
            New tasks will appear in this section
          </h3>
        </div>
      )}
    </>
  );
};

export default TaskList;
