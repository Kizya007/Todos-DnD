import { Link } from "react-router-dom";
import "../assets/Navigation.scss"

function Navigation() {
  return (
    <div className="container-nav">
      <h2 className="navigation-title">Навигация</h2>
      <nav className="navigation">
        <Link className="navigation-link" to="/projects">projects</Link>
      </nav>
    </div>
  );
}
export default Navigation;
