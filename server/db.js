const axios = require("axios");
const mongoose = require("mongoose");

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dburl = process.env.DB_URL;


const url = `mongodb+srv://${username}:${password}@${dburl}`;
mongoose.connect(url);

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});
