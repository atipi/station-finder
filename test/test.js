const assert = require("assert");
var get_distance = require("../lib/distance");
var get_power = require("../lib/power");

describe("get_power()", function() {
  it("should throw error for missing reach key", function() {
    expected = Error;
    const exercise = () => get_power({ x_pos: 0, y_pos: 0 }, 10);
    assert.throws(exercise, expected);
  });
});

describe("get_distance()", function() {
  it("should throw error for missing parameter", function() {
    expected = Error;
    const exercise = () => get_distance({ x_pos: 0, y_pos: 0 });
    assert.throws(exercise, expected);
  });
});
