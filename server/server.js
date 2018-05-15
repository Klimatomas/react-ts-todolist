// server.js
require('dotenv').config()
const express = require("express");
const db = require("./db");
const port = process.env.PORT || 5000;

app = express();

app.use(express.static(__dirname + "/../dist"));
app.use(express.json());
app.use(require('./controllers'))

app.listen(port, ()=>{
  console.log("server started " + port);
});
