import axios from "axios";
import React, { useState, useEffect } from "react";
import Todos from "./Todos";
function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("/api").then((res) => setData(res.data));
  }, [data]);

  return (
    <div>
      App
      <input id="input" type="text"></input>
      <button
        onClick={async () => {
          const input = document.getElementById("input");
          axios
            .post("/", {
              todos: input.value,
            })

            .catch(function (error) {
              console.log(error);
            });

          input.value = "";
        }}
      >
        Click Me
      </button>
      <div>
        <Todos data={data} />
      </div>
    </div>
  );
}

export default App;
