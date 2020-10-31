const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let countOfSteps = (2 ** disksNumber) - 1;
  let seconds = Math.floor((countOfSteps * 3600) / turnsSpeed);
  let Res = {
    turns: countOfSteps,
    seconds: seconds
  };
  console.log(Res);
  return Res;
};
