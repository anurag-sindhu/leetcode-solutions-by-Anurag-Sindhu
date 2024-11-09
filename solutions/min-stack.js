var MinStack = function () {
  this.arr = [];
  this.min = [];
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min > val) {
    this.min = val;
  }
  this.arr.push(val);
  return this.arr;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Math.pow(2, 31);
  for (const iterator of this.arr) {
    if (min > iterator) {
      min = iterator;
    }
  }
  return min;
};

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.getMin(); // return -3
obj.pop();
obj.top(); // return 0
obj.getMin(); // return -2

console.log(this.arr);
