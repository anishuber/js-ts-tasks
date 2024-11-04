/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++)
  {
    newarr.push(arr[i]);
    if (arr[i] % 2 !== 0)
    {
      newarr.push(100);
    }
  }
  return newarr;
};
