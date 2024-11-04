/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxCommonSubstring = "";
  for (let i = 0; i < str1.length; i++)
  {
    for (let j = 0; j < str2.length; j++)
    {
      let commonSubstring = "";
      let inner_i = i;
      let inner_j = j;
      while (str1[inner_i] === str2[inner_j] && inner_i < str1.length && inner_j < str2.length)
      {
        commonSubstring += str1[inner_i];
        inner_i++;
        inner_j++;
      }
      if (commonSubstring.length > maxCommonSubstring.length)
      {
        maxCommonSubstring = commonSubstring;
      }
    }
  }
  return maxCommonSubstring;
};
