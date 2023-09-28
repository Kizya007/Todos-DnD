import "../assets/Tasks.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Taskslist from "../components/Taskslist";
import TaskModal from "../components/TaskModal";

function Tasks() {
  let { name } = useParams();

  console.log(name);
  useEffect(() => {
    console.log(1);
  });
  return (
    <div className="tasks-page">
      <TaskModal />
      <div className="lists-container">
        <Taskslist title="Queue" tasks={["1", "2", "3"]} />
        <Taskslist title="Development" tasks={["1", "2", "3"]} />
        <Taskslist title="Done" tasks={["1", "2", "3"]} />
      </div>
    </div>
  );
}
export default Tasks;
