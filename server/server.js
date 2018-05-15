// server.js
require('dotenv').config()
const express = require("express");
const db = require("./db");

app = express();

if (process.env.NODE_ENV === "production") {
  var serveStatic = require("serve-static");
  app.use(serveStatic(__dirname + "/dist"));
}

var port = process.env.PORT || 5000;

app.use(express.json());
app.use(require('./controllers'))

app.listen(port, ()=>{
  console.log("server started " + port);
});
