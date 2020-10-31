const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
if (Object.prototype.toString.call(date) !== "[object Date]") {
  throw new Error('wrong date!');
}

  let month = date.getMonth();

  if (month === 11 || month < 2) {
    return "winter";
  } else if (month >= 2 && month < 5 ) {
    return "spring";
  } else if (month >= 5 && month < 8) {
    return "summer";
  } else if (month >= 8 && month < 11) {
    return "autumn";
  }

};
