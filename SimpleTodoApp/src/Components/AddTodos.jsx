function Addtodos() {
  return (
    <div className="addTodosContainer">
      <h1>Add A To Do</h1>
      <form>
        <p>Todo Title</p>
        <textarea rows={"1"}></textarea>
        <p>Todo Description</p>
        <textarea rows={"5"}></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}

export default Addtodos;
