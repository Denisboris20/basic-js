const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  for (var j = 0; j < 1; j++) {
    var ans = 0;
    var i = 1;
    while (parseInt(n / i) > 0) {
      var temp = parseInt(n / (i * 10)) * i + (n % i);
      i *= 10;
      ans = Math.max(ans, temp);
    }
    n = ans;
  }
  return n;
}

module.exports = {
  deleteDigit,
};
