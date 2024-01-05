import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);
  return (
    <div className="bg-emerald-500 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold uppercase">{task.title + ":"}</h1>
      <p className="text-teal-100">{task.description}</p>
      <button
        onClick={() => removeTask(task.id)}
        className="bg-teal-700 px-2 py-1 rounded-md mt-3 hover:bg-teal-500"
      >
        Remove task
      </button>
    </div>
  );
}

export default TaskCard;
