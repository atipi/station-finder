/**
 * @author: Porntip Chaibamrung
 */
var get_distance = require("./lib/distance");
var get_power = require("./lib/power");

// Alternative way to define objects without defining Class object
var link_stations = {
  station_a: {
    x_pos: 0,
    y_pos: 0,
    reach: 10
  },
  station_b: {
    x_pos: 20,
    y_pos: 20,
    reach: 5
  },
  station_c: {
    x_pos: 10,
    y_pos: 0,
    reach: 12
  }
};

var points = [
  {
    x_pos: 0,
    y_pos: 0
  },
  {
    x_pos: 100,
    y_pos: 100
  },
  {
    x_pos: 15,
    y_pos: 10
  },
  {
    x_pos: 18,
    y_pos: 18
  }
];

/**
 * Calculate powder between a point and a link station
 *
 * @param {*} point_obj
 * @param {*} station_obj
 *
 * @output: power
 */
function get_power_for_one(point_obj, station_obj) {
  var distance = get_distance(point_obj, station_obj);
  return get_power(station_obj, distance);
}

/* Main calculation */
for (var index = 0; index < points.length; ++index) {
  var best_power = undefined;
  for (var station_alias in link_stations) {
    var station_obj = link_stations[station_alias];

    var power;
    try {
      power = get_power_for_one(points[index], station_obj);
    } catch (error) {
      power = 0;
      console.error(error);
    }

    if (best_power === undefined) {
      best_power = power;
      points[index]["best_station"] = station_obj;
    } else {
      if (power > best_power) {
        best_power = power;
        points[index]["best_station"] = station_obj;
      }
    }
  }

  // show result to terminal
  var message = "";
  if (best_power === 0) {
    points[index]["best_station"] = undefined;
    message =
      "No link station within reach for point " +
      points[index]["x_pos"] +
      ", " +
      points[index]["y_pos"];
  } else {
    message =
      "Best link station for point " +
      points[index]["x_pos"] +
      ", " +
      points[index]["y_pos"] +
      " is " +
      points[index]["best_station"]["x_pos"] +
      ", " +
      points[index]["best_station"]["y_pos"] +
      " with power " +
      best_power;
  }
  console.log(message);
}

// Just in case we want to check result objects
//console.log("===========");
//console.log("Points: ", points);
