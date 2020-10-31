const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0;
 

  if (Number(sampleActivity) < 1 || Number(sampleActivity) > 15) {

    return false;
  } else if (isNaN(Number(sampleActivity))) {

    return false;
  } else if (typeof sampleActivity !== 'string') {

    return false;
  } else {
    let logTwo = 0.693;
    let reactSpeed = logTwo / HALF_LIFE_PERIOD;
    age = Math.log(MODERN_ACTIVITY / +sampleActivity) / reactSpeed;
    

    return Math.ceil(age);
  }


};
