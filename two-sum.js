var twoSum = function (nums, target) {
  let obj = {};
  let diff = 0;
  let resp = [];
  nums.find((value, index) => {
    diff = target - value;
    if (obj[value] || obj[value] === 0) {
      resp = [index, obj[value]];
      return true;
    } else {
      obj[diff] = index;
    }
    return false;
  });
  return resp;
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((nums = [3, 2, 4]), (target = 6)));
console.log(twoSum((nums = [3, 3]), (target = 6)));
