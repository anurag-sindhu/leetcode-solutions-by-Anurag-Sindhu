var ProductOfNumbers = function () {
  this.arr = [];
  this.obj = {};
};

ProductOfNumbers.prototype.add = function (num) {
  this.arr.push(num);
  const length = this.arr.length;
  if (!this.obj[0]) {
    this.obj[0] = {};
  }
  if (!this.obj[0][length]) {
    this.obj[0][length] = 1;
  }
  this.obj[0][length] = this.obj[0][length] * num;
  console.log('object');
};

ProductOfNumbers.prototype.getProduct = function (k) {
  const length = this.arr.length;
  let prod = this.arr[length - 1];
  if (k === 1) {
    return prod;
  }
  if (!this.obj[length - 1]) {
    this.obj[length - 1] = {};
  }
  for (let index = length - 1 - 1; index >= length - k; index--) {
    prod *= this.arr[index];
    if (!prod) {
      return 0;
    }
    this.obj[length - 1][index] = prod;
  }
  return prod;
};

let obj;
let operations;
let values;

obj = new ProductOfNumbers();
operations = [
  'ProductOfNumbers',
  'add',
  'add',
  'add',
  'add',
  'add',
  'getProduct',
  'getProduct',
  'getProduct',
  'add',
  'getProduct'
];
values = [[], [3], [0], [2], [5], [4], [2], [3], [4], [8], [2]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[-1,null,null,null,null,1,null,2]
}
