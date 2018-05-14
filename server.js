// server.js
const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("./db");

app = express();

if (process.env.NODE_ENV === "production") {
  var serveStatic = require("serve-static");
  app.use(serveStatic(__dirname + "/dist"));
}
var port = process.env.PORT || 5000;

app.listen(port);
console.log("server started " + port);

app.get("/api/cmc", (req, res) => {
  axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(response => {
    res.send(response.data);
  });
});

app.get("/dbtest", (req, res) => {
  db.getTodos(result => {
    res.send(result);
  });
});
//  todo add endpoints
app.get("/api/createTodo", (req, res) => {});

app.get("/api/deleteTodo", (req, res) => {});
