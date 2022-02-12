const express = require("express");
const app = express();
const PORT = process.env.PORT || 5555;
const knex = require("knex");
const path = require("path");
const env =
  process.env.NODE_ENV === "production" ? "production" : "development";
const setting = require("../knexfile")[env];
const db = knex(setting);
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api", async (_, res) => {
  const todos = await db.select().table("todos");
  res.send(todos);
});

app.post("/", async (req, res) => {
  //   console.log(db.select().from("todos"));
  await db("todos").insert(req.body);

  res.send("post page");
});

app.delete("/", async (req, res) => {
  await db("todos").del().where("id", req.body.todos.id);
  res.send("delete page");
});

app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
