var findEvenNumbers = function (digits) {
  function getDigitsConfig(nums) {
    const config = {};
    for (const iterator of nums) {
      if (!config[iterator]) {
        config[iterator] = 0;
      }
      config[iterator] += 1;
    }
    return config;
  }

  function getDigitsConfigFromString(nums) {
    const config = {};
    for (let index = 0; index < nums.length; index++) {
      if (!config[nums[index]]) {
        config[nums[index]] = 0;
      }
      config[nums[index]] += 1;
    }
    return config;
  }

  function areConfigSame(original, dynamic) {
    for (const key in dynamic) {
      if (dynamic[key] !== original[key]) {
        return false;
      }
    }
    return true;
  }

  const output = [];
  const digitsMapping = getDigitsConfig(digits);
  for (let index = 100; index < 1000; index += 2) {
    const stringDigits = index.toString();
    if (areConfigSame(digitsMapping, getDigitsConfigFromString(stringDigits))) {
      output.push(index);
    }
  }
  return output;
};

console.log(findEvenNumbers((digits = [2, 2, 8, 8, 2])));
console.log(findEvenNumbers((digits = [2, 1, 3, 0])));
console.log(findEvenNumbers((digits = [3, 7, 5])));
