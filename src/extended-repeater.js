const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let truStr = str + ""; 
  let truAdd = String(options.addition);

     let res = ""
     let addRes = "";
    if (!options.separator) {
        options.separator = '+'
    }

    if (!options.additionSeparator) {
      options.additionSeparator = "";
    }
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    }
    if (!options.repeatTimes) {
      options.repeatTimes = 1;
    }
   


    if (truAdd && truAdd !== "undefined") {
          let addArr = [];
        let i = 0;
        while (i < options.additionRepeatTimes) {
          addArr.push(`${truAdd}`);
 
          i++;
        }
        addRes = addArr.join(`${options.additionSeparator}`);

        if (options.repeatTimes) {
          let arrStr = [];
          let i = 0;
    
          while (i < options.repeatTimes) {
           arrStr.push(truStr);     
            
           i++;
          }
               
          res = arrStr.join(`${addRes}${options.separator}`) + addRes;
         
          return res;
          
      }
    } else {
      if (options.repeatTimes) {
        let arrStr = [];
        let i = 0;
  
        while (i < options.repeatTimes) {
         arrStr.push(truStr); 
             
                
         i++;
        }
             
        res = arrStr.join(`${options.separator}`);
       
        
    }
    }

 return res;
};
  