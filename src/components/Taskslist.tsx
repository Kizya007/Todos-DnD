import Task from "../components/Task";
import "../assets/TasksList.scss";

type TasksProps = {
  title: string;
  tasks: string[];
};

function Taskslist(props: TasksProps) {
  return (
    <div className="tasks-container">
      <h2 className="title">{props.title}</h2>
      <ul className="list">
        <Task />
      </ul>
    </div>
  );
}
export default Taskslist;
