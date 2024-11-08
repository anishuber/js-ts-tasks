/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function(start, end)
  {
    let result = [];
    for (let number = start; number <= end; number++)
    { 
      var isPrime = true;
      if (number < 2)
      {
        continue;
      }
      for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++)
      {
        if (number % i === 0)
        {
          isPrime = false;
          break;
        }
      }
      if (isPrime)
      {
        result.push(number);
      }
    }
    return result;
  }
};
