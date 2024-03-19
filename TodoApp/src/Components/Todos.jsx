import Todo from "../Components/Todo";

function Todos({todos,deletedTodoId}) {
  return (
    <div className="todosContainer">
      {
        todos.map(todo => {
         return (<Todo key={todo.id} todo={todo} deletedTodoId={deletedTodoId}></Todo>)
        })
      }
    </div>
  );
}

export default Todos;
