const axios = require("axios");
const Todo = ({ data }) => {
  return (
    <div>
      {" "}
      {data.map((todo) => (
        <div key={todo.id}>
          {" "}
          <li>{todo.todos}</li>{" "}
          <button
            onClick={async (e) =>
              await axios.delete("/", { data: { todos: todo } })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
