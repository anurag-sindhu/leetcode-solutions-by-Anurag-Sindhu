var permute1 = function (nums) {
  let output = [];
  if (nums === 1) {
    return [nums];
  }
  for (let index = 1; index <= nums; index++) {
    const getCombination = permute([...nums.slice(0, index), ...nums.slice(index + 1)]);
    for (const iterator of getCombination) {
      output.push([nums[index], ...iterator]);
    }
  }
  return output;
};

var permute = function (nums) {
  let output = [];
  if (nums.length === 1) {
    return [nums];
  }
  for (let index = 0; index < nums.length; index++) {
    const getCombination = permute([...nums.slice(0, index), ...nums.slice(index + 1)]);
    for (const iterator of getCombination) {
      const a = iterator.splice(0, 0, nums[index]);
      output.push(iterator);
    }
  }
  return output;
};
let resp = null;
resp = permute([1]);
console.log(resp);
resp = permute([1, 2, 3, 4]);
console.log(resp);
resp = permute([1, 2, 3, 4, 5]);
console.log(resp);
console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
