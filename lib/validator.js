/**
 * Validate input parameter with object data type. Throw an error if invalid data found.
 *
 * @param {*} obj
 */
function validate_object(obj) {
  if (obj === undefined) {
    throw Error("Expected object data!");
  }
  if (typeof obj !== "object") {
    throw Error("Expected object data type!");
  }
  if (!obj.hasOwnProperty("x_pos")) {
    throw Error("x_pos parameter is missing!");
  }
  if (!obj.hasOwnProperty("y_pos")) {
    throw Error("y_pos parameter is missing!");
  }

  return;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = validate_object;
module.exports = isNumber;
