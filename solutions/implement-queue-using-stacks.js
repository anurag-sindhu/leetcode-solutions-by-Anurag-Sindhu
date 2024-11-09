var MyQueue = function () {
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.arr.splice(0, 1);
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.arr[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !!!this.arr.length;
};

var obj = new MyQueue();
console.log(obj.push(1));
console.log(obj.push(2));
var param_3 = obj.peek();
console.log({ param_3 });
var param_2 = obj.pop();
console.log({ param_2 });
var param_4 = obj.empty();
console.log({ param_4 });
