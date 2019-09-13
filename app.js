const express = require("express");

const app = express();

//Middlewares
app.use("/post", () => {
  console.log("This is a middleware running");
});

// Now you can Routes
//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/post", (req, res) => {
  res.send("We are on post");
});

//Turn on the server and start listening
app.listen(3000);
