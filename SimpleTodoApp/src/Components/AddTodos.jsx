import { useState } from "react";

function Addtodos({ todoDatas }) {
  const [todoTitle, settodoTitle] = useState("");
  const [todoDesc, settodoDesc] = useState("");

  const saveTitle = (data) => {
    settodoTitle(data.target.value);
  };

  const saveDesc = (data) => {
    settodoDesc(data.target.value);
  };

  const createSubmit = (e) => {
    e.preventDefault();
    todoDatas(todoTitle, todoDesc);
    settodoDesc("");
    settodoTitle("");
  };

  return (
    <div className="addTodosContainer">
      <h1>Add A To Do</h1>
      <form onSubmit={createSubmit}>
        <p>Todo Title</p>
        <textarea
          rows={"1"}
          onChange={saveTitle}
          value={todoTitle}
          placeholder="Write a title"
        ></textarea>
        <p>Todo Description</p>
        <textarea
          rows={"3"}
          onChange={saveDesc}
          value={todoDesc}
          placeholder="Write a Description"
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}

export default Addtodos;
