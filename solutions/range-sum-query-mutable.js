var NumArray = function (nums) {
  this.array = nums;
  this.cache = {};
  let sum = 0;
  for (const iterator of nums) {
    sum += iterator;
  }
  this.sum = sum;
  this.cache[0] = { [nums.length - 1]: this.sum };
  return null;
};

NumArray.prototype.update = function (index, val) {
  this.sum = this.sum - this.array[index] + val;
  this.array[index] = val;
  if (!this.cache[0]) {
    this.cache[0] = {};
  }
  this.cache[0][this.array.length - 1] = this.sum;
  return null;
};

NumArray.prototype.sumRange = function (left, right) {
  const totalLength = this.array.length;
  const totalElementsRequiredForSum = right - left + 1;
  if (totalElementsRequiredForSum === totalLength) {
    return this.sum;
  }
  if (totalElementsRequiredForSum > totalLength / 2) {
    let leftSum = 0;
    let leftIndex = 0;
    if (this.cache[leftIndex] && this.cache[leftIndex][left - 1]) {
      leftSum += this.cache[leftIndex][left - 1];
      leftIndex = left - 1;
    }
    for (; leftIndex < left; leftIndex++) {
      leftSum += this.array[leftIndex];
      if (!this.cache[0]) {
        this.cache[0] = {};
      }
      if (this.cache[leftIndex] && this.cache[leftIndex][left - 1]) {
        leftSum += this.cache[leftIndex][left - 1];
        leftIndex = left - 1;
      }
      this.cache[0][leftIndex] = leftSum;
    }
    let rightSum = 0;
    let rightIndex = right + 1;

    if (this.cache[rightIndex] && this.cache[rightIndex][this.array.length - 1]) {
      rightSum += this.cache[rightIndex][this.array.length - 1];
      rightIndex = this.array.length - 1;
    }
    for (; rightIndex < this.array.length; rightIndex++) {
      rightSum += this.array[rightIndex];
      if (!this.cache[right + 1]) {
        this.cache[right + 1] = {};
      }
      if (this.cache[rightIndex] && this.cache[rightIndex][this.array.length - 1]) {
        rightSum += this.cache[rightIndex][this.array.length - 1];
        rightIndex = this.array.length - 1;
      }
      this.cache[right + 1][rightIndex] = rightSum;
    }

    return this.sum - leftSum - rightSum;
  } else {
    if (this.cache[left] && this.cache[left][right]) {
      return this.cache[left][right];
    }
    let sum = 0;
    for (let index = left; index <= right; index++) {
      if (this.array[index] === undefined) {
        break;
      }
      if (this.cache[index] && this.cache[index][right]) {
        sum += this.cache[index][right];
        index = right;
      }
      if (!this.cache[left][index]) {
        this.cache[left] = {};
      }
      this.cache[left][right] = sum;
      sum += this.array[index];
    }
    return sum;
  }
};

let obj;
let operations;
let values;

operations = ['NumArray', 'sumRange', 'update', 'sumRange', 'sumRange', 'sumRange', 'sumRange'];
values = [[[1, 2, 3, 4, 5, 6, 7, 8, 9]], [0, 2], [1, 2], [0, 2], [2, 5], [1, 7], [0, 6]];

obj = new NumArray(values[0][0]);
for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
}

operations = ['NumArray', 'sumRange', 'update', 'sumRange'];
values = [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]];

obj = new NumArray(values[0][0]);
for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
}
