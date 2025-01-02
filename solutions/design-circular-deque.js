const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var MyCircularDeque = function (k) {
    this.frontArr = [];
    this.rearArr = [];
    this.size = k;
};

MyCircularDeque.prototype.insertFront = function (value) {
    if (this.frontArr.length + this.rearArr.length === this.size) {
        return false;
    }
    this.frontArr.push(value);
    return true;
};

MyCircularDeque.prototype.insertLast = function (value) {
    if (this.frontArr.length + this.rearArr.length === this.size) {
        return false;
    }
    this.rearArr.push(value);
    return true;
};

MyCircularDeque.prototype.deleteFront = function () {
    if (this.frontArr.length) {
        this.frontArr.pop();
        return true;
    } else if (this.rearArr.length) {
        this.rearArr.shift();
        return true;
    }
    return false;
};

MyCircularDeque.prototype.deleteLast = function () {
    if (this.rearArr.length) {
        this.rearArr.pop();
        return true;
    } else if (this.frontArr.length) {
        this.frontArr.shift();
        return true;
    }
    return false;
};

MyCircularDeque.prototype.getFront = function () {
    if (this.frontArr.length) {
        return this.frontArr[this.frontArr.length - 1];
    } else if (this.rearArr.length) {
        return this.rearArr[0];
    }
    return -1;
};

MyCircularDeque.prototype.getRear = function () {
    if (this.rearArr.length) {
        return this.rearArr[this.rearArr.length - 1];
    } else if (this.frontArr.length) {
        return this.frontArr[0];
    }
    return -1;
};

MyCircularDeque.prototype.isEmpty = function () {
    if (this.frontArr.length || this.rearArr.length) {
        return false;
    }
    return true;
};

MyCircularDeque.prototype.isFull = function () {
    if (this.frontArr.length + this.rearArr.length === this.size) {
        return true;
    }
    return false;
};

let obj;
let operations;
let values;
let res;
let output = [null];

output = [null];
operations = [
    'MyCircularDeque',
    'insertLast',
    'insertLast',
    'getFront',
    'getRear',
    'isFull',
    'deleteLast',
    'insertFront',
    'getFront',
];
values = [[3], [1], [2], [], [], [], [], [4], []];
/**
 * 1 2
 */
obj = new MyCircularDeque(...values[0]);
for (let index = 1; index < operations.length; index++) {
    if (index == 3) {
        console.log('object');
    }
    const resp = obj[operations[index]](...values[index]);
    output.push(resp);
}

res = areTwoArrayEqual([null, true, true, 1, 2, false, true, true, 4], output);
console.log({ res });

output = [null];
operations = [
    'MyCircularDeque',
    'insertLast',
    'insertLast',
    'insertFront',
    'insertFront',
    'getRear',
    'isFull',
    'deleteLast',
    'insertFront',
    'getFront',
];
values = [[3], [1], [2], [3], [4], [], [], [], [4], []];

obj = new MyCircularDeque(...values[0]);
for (let index = 1; index < operations.length; index++) {
    if (index == 7) {
        console.log('object');
    }
    const resp = obj[operations[index]](...values[index]);
    output.push(resp);
}

res = areTwoArrayEqual([null, true, true, true, false, 2, true, true, true, 4], output);
console.log({ res });
