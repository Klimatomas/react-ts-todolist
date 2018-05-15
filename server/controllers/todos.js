const Todo = require("../models/todoModel");
const express = require("express");
const router = express.Router();

router.get("/api/todos", (req, res) => {
  Todo.getTodos(req, todos => {
    res.send(todos);
  });
});

router.post("/api/todos", (req, res) => {
  Todo.postTodo(req, todos => {
    res.send(todos);
  });
});

router.delete("/api/todos", (req, res) => {
  Todo.deleteTodo(req, todos => {
    res.send(todos);
  });
});

router.put("/api/todos", (req, res) => {
  Todo.toggleTodo(req, todos => {
    res.send(todos);
  });
});

module.exports = router;
