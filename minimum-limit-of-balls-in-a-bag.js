const isPossible = function (nums, maxOperations, middle) {
  const orgOperations = maxOperations;
  while (maxOperations--) {
    const newArray = [];
    for (const iterator of nums) {
      if (iterator <= middle) {
        newArray.push(iterator);
      } else {
        const other = iterator - middle;
        newArray.push(other);
        newArray.push(middle);
      }
      if (orgOperations + nums.length < newArray.length) {
        return false;
      }
    }
    nums = [...newArray];
  }

  return nums;
};

var minimumSize = function (nums, maxOperations) {
  let lastMaxFound = null;
  let lastArray = null;
  let low = 1;
  const max = Math.max(...nums);
  let high = max;
  let middle = Math.floor((low + high) / 2);
  while (true) {
    let resp = isPossible(nums, maxOperations, middle);
    lastMaxFound = Math.max(...resp);
    if (Array.isArray(resp)) {
      high = middle;
      middle = Math.floor((low + high) / 2);
    } else {
      console.log('object');
    }
    middle = Math.floor(middle / 2);
  }

  return middle;
};

console.log(minimumSize((nums = [9]), (maxOperations = 2)));
console.log(minimumSize((nums = [2, 4, 8, 2]), (maxOperations = 4)));
console.log(minimumSize((nums = [7, 17]), (maxOperations = 2)));
