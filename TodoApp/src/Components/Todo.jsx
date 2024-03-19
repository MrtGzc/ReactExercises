function Todo({todo}) {
  return (
    <div className="todoContainer">
      <h3>Title</h3>
      <p>{todo.title}</p>
      <h3>Description</h3>
      <p>{todo.desc}</p>
      <div className="buttons">
        <button className="deleteBtn">Delete</button>
        <button className="updateBtn">Update</button>
      </div>
    </div>
  );
}

export default Todo;
