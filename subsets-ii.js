var subsets = function (nums) {
  let output = [];
  let index = 0;
  while (index < nums.length) {
    const tempArr = [];
    if (index === 0) {
      output.push([]);
    }
    for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
      tempArr.push([...output[outputIndex], nums[index]]);
    }
    output = [...output, ...tempArr];
    index++;
  }
  return output;
};

function getUniqueElementsOfArray(array) {
  const obj = {};
  const output = [];
  for (let index = 0; index < array.length; index++) {
    const sortedArray = array[index].sort((a, b) => a - b).join('');
    if (!obj[sortedArray]) {
      obj[sortedArray] = true;
      output.push(array[index]);
    }
  }
  return output;
}

var subsetsWithDup = function (nums) {
  return getUniqueElementsOfArray(subsets(nums));
};
console.log(subsetsWithDup([4, 4, 4, 1, 4]));
//[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
