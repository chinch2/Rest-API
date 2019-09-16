const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../Models/marikart");

// Describe Tests *Put here what your test is about*
describe("Saving Records", () => {
  // Create Tests
  it("Saves records to the database", done => {
    var char = new MarioChar({
      name: "Mario"
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  // Next test
});
