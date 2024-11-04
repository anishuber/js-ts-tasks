/**
 * Check if an {object} contains property {prop} (including inherited properties)
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  return (prop in object);
};
