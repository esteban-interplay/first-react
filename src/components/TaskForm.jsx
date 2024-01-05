import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = function (e) {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-extrabold m-3 text-white">Add task</h1>
      <form onSubmit={handleSubmit} className="bg-emerald-500 p-10 mb-5 rounded-3xl">
        <input
          placeholder="Write your task here!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus={true}
          className="bg-slate-100 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Describe your task in this box."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-100 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-teal-600 px-3 py-1 text-white">Save task</button>
      </form>
    </div>
  );
}

export default TaskForm;
