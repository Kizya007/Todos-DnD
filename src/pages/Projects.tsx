import "../assets/Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="title">Список проектов</h1>
      <ul className="projects">
        <li className="project">
          <h2 className="project-title">Проект 1</h2>
          <Link to="/projects/one/todos" className="todos-link">
            Список дел
          </Link>
        </li>
        <li className="project">
          <h2 className="project-title">Проект 2</h2>
          <Link to="/projects/two/todos" className="todos-link">
            Список дел
          </Link>
        </li>
        <li className="project">
          <h2 className="project-title">Проект 3</h2>
          <Link to="/projects/three/todos" className="todos-link">
            Список дел
          </Link>
        </li>
        <li className="project">
          <h2 className="project-title">Проект 4</h2>
          <Link to="/projects/four/todos" className="todos-link">
            Список дел
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
