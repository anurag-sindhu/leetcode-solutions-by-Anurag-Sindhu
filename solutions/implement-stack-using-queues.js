var MyStack = function () {
  this.storage = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.storage.push(x);
  return null;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.storage.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.storage[this.storage.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.storage.length;
};
var obj = new MyStack();
let keys = null;
let values = null;
keys = ['MyStack', 'push', 'push', 'top', 'pop', 'empty'];
values = [[], [1], [2], [], [], []];
//[null, null, null, 2, 2, false]
for (let index = 1; index < keys.length; index++) {
  const res = obj[keys[index]](values[index]);
  console.log({ res });
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
