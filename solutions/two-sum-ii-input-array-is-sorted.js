var twoSum = function (numbers, target) {
  const config = {};
  for (let index = 0; index < numbers.length; index++) {
    config[numbers[index]] = index;
  }

  for (let index = 0; index < numbers.length; index++) {
    if (config[target - numbers[index]] || config[target - numbers[index]] === 0) {
      return [index + 1, config[target - numbers[index]] + 1];
    }
  }
  return config;
};

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
