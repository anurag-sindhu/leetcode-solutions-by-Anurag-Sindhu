var findLHS = function (nums) {
  const frequency = (function () {
    const config = {};
    for (let index = 0; index < nums.length; index++) {
      if (!config[nums[index]]) {
        config[nums[index]] = [];
      }
      config[nums[index]].push(index);
    }
    return config;
  })();

  for (let index = 0; index < nums.length; index++) {
    let startIndex = null;
    let endIndex = null;
    const element = nums[index];
    const lessElement = nums[index] - 1;
    const moreElement = nums[index] + 1;
    const elementIndex =
      (frequency[element] && frequency[element][frequency[element].length - 1]) || null;
    const lessElementIndex =
      (frequency[lessElement] && frequency[lessElement][frequency[lessElement].length - 1]) || null;
    const moreElementIndex =
      (frequency[moreElement] && frequency[moreElement][frequency[moreElement].length - 1]) || null;
    if (index === elementIndex) {
    }
    if (elementIndex !== null && lessElementIndex !== null && moreElementIndex !== null) {
    }
    if (elementIndex > moreElementIndex) {
      startIndex = null;
    } else if (elementIndex > moreElementIndex) {
      endIndex = null;
    }

    console.log('object');
  }
  return;
};

console.log(findLHS((nums = [1, 3, 2, 2, 5, 2, 3, 7])));
console.log(findLHS((nums = [1, 2, 3, 4])));
console.log(findLHS((nums = [1, 3, 2, 2, 5, 2, 3, 7, 7])));
console.log(findLHS((nums = [1, 1, 1, 1])));
