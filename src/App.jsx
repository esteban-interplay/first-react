import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-cyan-900 h-screen">
      <div className="container m-auto p-10">
        <Tasklist />
        <TaskForm />
      </div>
    </main>
  );
}

export default App;
