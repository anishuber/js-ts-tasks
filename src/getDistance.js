/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  var xDifference = Math.abs(firstPoint.X - secondPoint.X);
  var yDifference =  Math.abs(firstPoint.Y - secondPoint.Y);
  var distance = Math.sqrt(xDifference * xDifference + yDifference * yDifference);
  return distance.toFixed(2);
};
