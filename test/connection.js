const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(done => {
  //Connect to DB
  mongoose.connect("mongodb://localhost:27017/NewDB");

  mongoose.connection
    .once("open", () => {
      console.log("Connection has been made, now make fireworks...");
      done();
    })
    .on("error", error => {
      console.log("Connection error", error);
    });
});
