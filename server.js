// server.js
const express = require("express");
const axios = require("axios");
app = express();

if (process.env.NODE_ENV === "production") {
const serveStatic = require("serve-static");
 app.use(serveStatic(__dirname + "/dist"));
}

const port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
app.get("/api/cmc", function(req, res) {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then((response) => {
      res.send(response.data)
  })
});



