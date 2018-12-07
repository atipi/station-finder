var validate_object = require("./validator");

/**
 * Calculate distance between 2 points
 * @input: point object A with folloiwng keys: x_pos and y_pos
 * @input: point object B with folloiwng keys: x_pos and y_pos
 *
 * @output: distance value: float with 2 digit decimal point
 */
function get_distance(point_a, point_b) {
  validate_object(point_a);
  validate_object(point_b);

  var x1 = point_a["x_pos"];
  var x2 = point_b["x_pos"];
  var y1 = point_a["y_pos"];
  var y2 = point_b["y_pos"];
  // Distance = square root of (x2-x1)2 + (y2-y1)2
  var dis_tance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // get 5 digits result
  dis_tance = Number(dis_tance).toFixed(5);
  return dis_tance;
}

module.exports = get_distance;
