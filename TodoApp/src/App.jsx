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

  const deletedTodoId = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  
  const changeTodoid = (newTitle, newDesc, id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
            desc: newDesc,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="appContainer">
      <Addtodos todoDatas={todoDatas}></Addtodos>
      <Todos
        todos={todos}
        deletedTodoId={deletedTodoId}
        changeTodoid={changeTodoid}
      ></Todos>
    </div>
  );
}

export default App;
