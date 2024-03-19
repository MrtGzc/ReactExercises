import { useState } from "react";
import "./App.css";
import Addtodos from "./Components/AddTodos";
import Todos from "./Components/Todos";

function App() {
  const [todos, settodos] = useState([]);

  const todoDatas = (todoTitle, TodoDesc) => {
    settodos([
      ...todos,
      {
        title: todoTitle,
        desc: TodoDesc,
        id: Math.floor(Math.random() * 100001),
      },
    ]);
  };

  return (
    <div className="appContainer">
      <Addtodos todoDatas={todoDatas}></Addtodos>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
