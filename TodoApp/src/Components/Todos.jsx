import Todo from "../Components/Todo";

function Todos({ todos, deletedTodoId, changeTodoid }) {
  return (
    <div className="todosContainer">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deletedTodoId={deletedTodoId}
            changeTodoid={changeTodoid}
          ></Todo>
        );
      })}
    </div>
  );
}

export default Todos;
