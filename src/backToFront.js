/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */

module.exports.backToFront = function backToFront(str, symbolsCount) {
  var pasteStr = "";
  let length = str.length;
  if (symbolsCount <= length) {
    for (let i = length - symbolsCount; i < length; i++) {
      pasteStr += str[i];
    }
    return pasteStr + str + pasteStr;
  } 
  else
  {
    return str;
  }
};
