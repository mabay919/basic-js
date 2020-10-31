const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw 'Wrong Walue!';
  }
  let newArr = arr.slice();



  for ( let i = 0; i < newArr.length; i += 1) {
   if (newArr[i] === '--discard-prev' && i === 0) {
     newArr.shift();
   } else if (newArr[i] === '--double-prev' && i === 0) {
    newArr.shift();
   } else if (newArr[i] === '--double-next' && newArr[i + 1] == undefined) {
     newArr.pop()
   } else if (newArr[i] === '--discard-next' && newArr[i + 1] == undefined) {
    newArr.pop()
  } else if (newArr[i] === '--double-prev') {
    newArr.splice(i, 0, newArr[i - 1]);
    i += 1;
  } else if ( newArr[i] === '--discard-prev' ) {
    newArr.splice(i - 1, 1);
    i -= 1;
  } else if (newArr[i] === '--double-next') {
    newArr.splice(i + 1, 0, newArr[i + 1]);
  } else if (newArr[i] === '--discard-next') {
    newArr.splice(i + 1, 1);
  }

  }
  return newArr.filter((item) => item !== undefined
                              && item !== '--discard-prev'
                              && item !== '--double-prev'
                              && item !== '--double-next'
                              && item !== '--discard-next');

};
