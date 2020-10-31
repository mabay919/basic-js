const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)){
  return false;
} 

let sort = members.filter(item => typeof item === 'string')
                  .map(item => item.match(/\b\w+\b/))
                  .map(item => item[0])
                  .map(item => item[0].toUpperCase())
                    .sort()
                    .join('');
                    
return sort;

};
