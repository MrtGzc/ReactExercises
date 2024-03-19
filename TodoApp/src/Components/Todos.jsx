import Todo from "../Components/Todo";

function Todos({todos}) {
  return (
    <div className="todosContainer">
      {
        todos.map(todo => {
         return (<Todo todo={todo}></Todo>)
        })
      }
    </div>
  );
}

export default Todos;
