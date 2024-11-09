const { values } = require('lodash');

var singleNumber = function (nums) {
  const obj = {};
  for (const iterator of nums) {
    if (!obj[iterator]) {
      obj[iterator] = 1;
    } else {
      obj[iterator] = obj[iterator] + 1;
    }
  }
  return Object.keys(obj).find((value) => obj[value] === 1);
};
console.log(singleNumber([2, 2, 1]));
