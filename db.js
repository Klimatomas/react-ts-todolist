const axios = require("axios");
const mongoose = require("mongoose");

module.exports = {
  getTodos
};

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dburl = process.env.DB_URL;
const url = `mongodb+srv://${username}:${password}@${dburl}`;
mongoose.connect(url);
const db = mongoose.connection;
db.on("error", error => {
  console.error("failed to connect to db " + DB_URL);
});
db.once("open", function() {
  console.log("opened!");
});
const todoSchema = mongoose.Schema({
  completed: Boolean,
  text: String,
  userID: Number,
  dateCreated: Date
});
const Todo = mongoose.model("Todo", todoSchema);

function createConnection() {
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
    });
}

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});
