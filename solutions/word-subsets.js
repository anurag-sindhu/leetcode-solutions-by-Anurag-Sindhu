function getUniqueElementsOfArray(array) {
  const obj = {};
  for (let index = 0; index < array.length; index++) {
    const joined = array[index].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');

    if (joined && !obj[joined]) {
      obj[joined] = true;
    }
  }
  return obj;
}

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
  return getUniqueElementsOfArray(output);
};

var wordSubsets = function (words1, words2) {
  const output = [];
  const words1Obj = {};
  for (const key of words1) {
    words1Obj[key] = subsets(key);
  }
  let found = false;
  for (const key in words1Obj) {
    for (let iterator of words2) {
      iterator = iterator
        .split('')
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        .join('');
      found = false;
      if (!words1Obj[key][iterator]) {
        found = true;
        break;
      }
    }
    if (!found) {
      output.push(key);
    }
  }
  return output;
};

console.log(wordSubsets(['google', 'leetcode'], ['lo', 'eo']));
console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['lo', 'eo']));
console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'oo']));
console.log(
  wordSubsets(
    (words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']),
    (words2 = ['l', 'e'])
  )
);
console.log(
  wordSubsets(
    (words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']),
    (words2 = ['e', 'o'])
  )
);
