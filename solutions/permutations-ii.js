function getUniqueElementsOfArray(array) {
  const obj = {};
  const output = [];
  let key = '';
  for (let index = 0; index < array.length; index++) {
    key = '';
    for (let subArrayIndex = 0; subArrayIndex < array[index].length; subArrayIndex++) {
      key += array[index][subArrayIndex];
    }
    if (!obj[key]) {
      obj[key] = true;
      output.push(array[index]);
    }
  }
  return output;
}

var getPermutations = function (nums) {
  let output = [];
  if (nums.length === 1) {
    return [nums];
  }
  for (let index = 0; index < nums.length; index++) {
    const getCombination = getPermutations([...nums.slice(0, index), ...nums.slice(index + 1)]);
    for (const iterator of getCombination) {
      const a = iterator.splice(0, 0, nums[index]);
      output.push(iterator);
    }
  }
  return output;
};

var permuteUnique = function (nums) {
  const getAllPermutations = getPermutations(nums);
  return getUniqueElementsOfArray(getAllPermutations);
};

let res = permuteUnique([1, 1, 2]);
console.log(res);
res = permuteUnique([1, 2, 3]);
console.log(res);
