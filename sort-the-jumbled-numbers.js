var sortJumbled = function (mapping, nums) {
  const sortedArray = {};
  for (const iterator of nums) {
    const stringNum = iterator.toString();
    let temp = ``;
    for (let index = 0; index < stringNum.length; index++) {
      temp += `${mapping[stringNum[index]]}`;
    }
    if (!sortedArray[Number(temp)]) {
      sortedArray[Number(temp)] = [];
    }
    sortedArray[Number(temp)].push(stringNum);
  }
  const output = [];
  for (const key in sortedArray) {
    output.push(...sortedArray[key]);
  }
  return output;
};

console.log(sortJumbled((mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6]), (nums = [991, 338, 38])));
