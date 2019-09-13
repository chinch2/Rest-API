const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Now you can Routes
//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/post", (req, res) => {
  res.send("We are on post");
});

//Connect to DB
mongoose.connect("", () => {
  console.log("Connected to DB");
});

//Turn on the server and start listening
app.listen(3000);
