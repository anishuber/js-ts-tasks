/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  if (Array.isArray(promisesArray)) {
    return new Promise((resolve, reject) => {
      for (const promise of promisesArray) {
        if (!promise instanceof Promise || promise === null) {
          throw new TypeError('The array should contain non-null Promise entities.');
        }

        Promise.resolve(promise).then(resolve).catch(reject);
      }
    });
  }
  throw new TypeError('You should pass an array to this function.');
};
