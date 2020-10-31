const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  let arr = matrix.flat();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== "^^") {
      res = res;
    } else {
      res = res + 1;
    }
  }
  return res;
};
