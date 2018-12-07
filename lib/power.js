var validate_object = require("./validator");
var isNumber = require("./validator");

/**
 * Calculate power between device's point and link station
 *
 * @param {*} station_obj: station object with following keys: x_pos, y_pos and reach
 * @param {*} distance: float value of distance between device's point and station
 *
 * @output: float value
 */
function get_power(station_obj, distance) {
  validate_object(station_obj);
  if (!station_obj.hasOwnProperty("reach")) {
    throw Error("reach parameter is missing!");
  }

  var is_distance_numeric = isNumber(distance);
  if (!is_distance_numeric) {
    throw Error("Expected numeric data in distance parameter");
  }

  var reach = station_obj["reach"];
  if (distance > reach) {
    return 0;
  }

  // Formula
  // power = (reach - device's distance from linkstation)^2
  var power = Math.pow(reach - distance, 2);

  return power;
}

module.exports = get_power;
