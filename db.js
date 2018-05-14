const axios = require("axios");
const mongoose = require("mongoose");

module.exports = {
  getTodos
};

if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION ENVIRONMENT");
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const dburl = process.env.DB_URL;
} else {
  console.log("fallback to placeholder db");
  const username = "username";
  const password = "password";
  const dburl = "mongodb://localhost:27017/react-ts-todolist";
}

const todoSchema = mongoose.Schema({
  completed: Boolean,
  text: String,
  userID: Number,
  dateCreated: Date
});
const Todo = mongoose.model("Todo", todoSchema);

function createConnection() {
  const url = `mongodb+srv://${username}:${password}@${dburl}`;
  mongoose.connect(url);
  var db = mongoose.connection;
  db.on("error", error => {
    console.error("failed to connect to db " + DB_URL);
  });
  db.once("open", function() {
    console.log("opened!");
  });
}

function terminateConnection() {
  mongoose.connection.close();
}

function getTodos(callback) {
  createConnection();
  const query = Todo.find({ userID: 1 });
  query
    .exec()
    .then(response => {
      console.log("response", response);
      callback(response);
    })
    .catch(error => {
      console.log(error);
      callback("an error occured, please try again later");
    })
    .then(() => {
      terminateConnection();
    });
}