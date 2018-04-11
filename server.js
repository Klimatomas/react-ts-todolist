// server.js
var express = require("express");
var path = require("path");
app = express();

if (process.env.NODE_ENV === "production") {
  var serveStatic = require("serve-static");
  app.use(serveStatic(__dirname + "/dist"));
}
var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);

app.get("/hi", function(req, res) {
  res.send("hi world");
});

app.get("/hello", function(req, res) {
  res.send("hello world");
});

app.get("/omg", function(req, res) {
  res.send("hello world");
});

app.get("/ffs", function(req, res) {
  res.send("hello world ffs");
});
