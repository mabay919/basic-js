const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) {
        return 1;
      } else {
        return 1 + arr.reduce((sum, current) => {
          return Math.max(sum, this.calculateDepth(current));
        
        }, 0);
      }
    } else {
      return 0;
    }
  }


};
