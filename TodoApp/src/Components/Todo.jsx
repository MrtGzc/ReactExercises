import { useState } from "react";

function Todo({ todo, deletedTodoId,changeTodoid }) {
  const [UpdateStatus, setUpdateStatus] = useState(false);
  const [newTitle, setnewTitle] = useState("")
  const [newDesc, setnewDesc] = useState("")
  const deleteTodos = () => {
    deletedTodoId(todo.id);
  };

  const updateTodos = () => {
    setUpdateStatus(true);
  };

  const updatedTodo = () => {
    changeTodoid(newTitle,newDesc,todo.id)
    setUpdateStatus(false);
  }

  const titleChange = (item) => {
    setnewTitle(item.target.value)
  }

  const descChange = (item) => {
    setnewDesc(item.target.value)
  }

  return (
    <div className="todoContainer">
      {UpdateStatus ? (
        <div>
          <h3>Title</h3>
          <textarea rows={"1"} onChange={titleChange} defaultValue={todo.title}></textarea>
          <h3>Description</h3>
          <textarea rows={"3"} onChange={descChange} defaultValue={todo.desc}></textarea>
          <div className="buttons">
            <button className="updateBtn" onClick={updatedTodo}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Title</h3>
          <p>{todo.title}</p>
          <h3>Description</h3>
          <p>{todo.desc}</p>
          <div className="buttons">
            <button className="deleteBtn" onClick={deleteTodos}>
              Delete
            </button>
            <button className="updateBtn" onClick={updateTodos}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
