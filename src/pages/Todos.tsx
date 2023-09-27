import "../assets/Todos.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Todos() {
  let { name } = useParams();

  console.log(name);
  useEffect(() => {
    console.log(1);
  });
  return (
    <div>
      <h1>todos</h1>
    </div>
  );
}
export default Todos;
