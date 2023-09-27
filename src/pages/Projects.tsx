import "../assets/Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <ul>
        <li>
          <h2>Project 1</h2>
          <Link to="/projects/one/todos">todos 1</Link>
        </li>
        <li>
          <h2>Project 1</h2>
          <Link to="/projects/two/todos">todos 2</Link>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
