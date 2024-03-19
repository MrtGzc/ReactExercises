function Todo({todo,deletedTodoId}) {

  const deleteTodos = () => {
    deletedTodoId(todo.id)
  }

  return (
    <div className="todoContainer">
      <h3>Title</h3>
      <p>{todo.title}</p>
      <h3>Description</h3>
      <p>{todo.desc}</p>
      <div className="buttons">
        <button className="deleteBtn" onClick={deleteTodos}>Delete</button>
        <button className="updateBtn">Update</button>
      </div>
    </div>
  );
}

export default Todo;
