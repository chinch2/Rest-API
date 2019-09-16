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
mongoose.connect(
  "mongodb://localhost:27017/NewDB",
  () => {
    console.log("Connected to DB");
  },
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//Turn on the server and start listening
app.listen(3000);
