/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  if (!Array.isArray(promisesArray)) {
    throw new TypeError('You should pass an array to this function');
  }

  for (const item of promisesArray) {
    if (!item instanceof Promise || item === null) {
      throw new TypeError('The array should contain non-null promises');
    }
  }

  return new Promise((resolve, reject) => {
    let count = 0;
    let results = [];
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          count++;

          if (count === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
