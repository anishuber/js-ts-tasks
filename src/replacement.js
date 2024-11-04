/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  newarr = [];
  for (let i = 0; i < arr.length; i++)
  {
    let digitsInNumber = Math.abs(arr[i]).toString().length;
    newarr.push(digitsInNumber < 4 ? digitsInNumber : 4);
  }
  return newarr;
};