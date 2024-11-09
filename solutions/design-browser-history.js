var BrowserHistory = function (homepage) {
  this.arr = [homepage];
  this.currentIndex = 0;
  this.lastIndex = 0;
};

BrowserHistory.prototype.visit = function (url) {
  if (this.arr[this.currentIndex + 1] !== undefined) {
    this.arr[++this.currentIndex] = url;
  } else {
    this.arr[++this.currentIndex] = url;
  }
  if (this.arr.length > this.currentIndex + 1) {
    this.arr = this.arr.slice(0, this.currentIndex + 1);
  }
  return null;
};

BrowserHistory.prototype.back = function (steps) {
  this.currentIndex = this.currentIndex - steps;
  if (this.currentIndex < 0) {
    this.currentIndex = 0;
  }
  let res = this.arr[this.currentIndex];
  return res;
};

BrowserHistory.prototype.forward = function (steps) {
  this.currentIndex = this.currentIndex + steps;
  if (this.currentIndex >= this.arr.length) {
    this.currentIndex = this.arr.length - 1;
  }
  let res = this.arr[this.currentIndex];
  return res;
};

let obj;
let operations;
let values;

operations = [
  'BrowserHistory',
  'visit',
  'visit',
  'visit',
  'back',
  'back',
  'forward',
  'visit',
  'forward',
  'back',
  'back'
];
values = [
  ['leetcode.com'],
  ['google.com'],
  ['facebook.com'],
  ['youtube.com'],
  [1],
  [1],
  [1],
  ['linkedin.com'],
  [2],
  [2],
  [7]
];
obj = new BrowserHistory(values[0][0]);

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]
}
