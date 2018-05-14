const axios = require("axios");
const mongoose = require("mongoose");

module.exports = {
  getTodos
};

if (process.env.NODE_ENV === "production") {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const dburl = process.env.DB_URL;
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
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("opened!");
  });
}

function terminateConnection() {
  mongoose.disconnect();
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
