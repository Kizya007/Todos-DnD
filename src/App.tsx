import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="page-wrap">
        <Routes>
          <Route path="/projects/:name/todos" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
