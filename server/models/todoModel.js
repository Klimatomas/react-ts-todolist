const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  completed: Boolean,
  text: String,
  userID: Number,
  dateCreated: Date
});
const Todo = mongoose.model("Todo", todoSchema);

getTodos = (req, returnResults) => {
  Todo.find({ userID: 1 })
    .then(results => {
      returnResults(results);
    })
    .catch(error => {
      returnResults(error);
    });
};

postTodo = (req, returnResults) => {
  request = req.body;
  Todo.create({ completed: false, text: request.text, userID: 1, dateCreated: new Date() })
    .then(response => {
      returnResults(response);
    })
    .catch(error => {
      returnResults(error);
    });
};

deleteTodo = (req, returnResults) => {
  request = req.body;
  Todo.deleteOne({ _id: request._id })
    .then(response => {
      returnResults(response);
    })
    .catch(error => {
      returnResults(error);
    });
};

toggleTodo = (req, returnResults) => {
  request = req.body;
  Todo.findByIdAndUpdate(request._id, { completed: request.completed })
    .then(todo => {
      returnResults(todo);
    })
    .catch(error => {
      returnResults(error);
    });
};

module.exports = {
  Todo,
  getTodos,
  postTodo,
  deleteTodo,
  toggleTodo
};
