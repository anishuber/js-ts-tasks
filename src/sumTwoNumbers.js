/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  typeof(firstNumber) === "string" ? firstNumber = firstNumber.replaceAll(" ", "") - 0 : firstNumber;
  typeof(secondNumber) === "string" ? secondNumber = secondNumber.replaceAll(" ", "") - 0 : secondNumber;
  return firstNumber + secondNumber;
};
