import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/projects">projects</Link>
      </nav>
      <Routes>
        <Route path="/projects/:name/todos" element={<Todos />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
