const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var MyCircularQueue = function (k) {
    this.arr = new Array(k);
    this.originalSize = k;
    this.size = 0;
};

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.size < this.originalSize) {
        this.arr[this.size++] = value;
        return true;
    }
    return false;
};

MyCircularQueue.prototype.deQueue = function () {
    if (this.size > 0) {
        this.size -= 1;
        this.arr = this.arr.slice(1);
        return true;
    }
    return false;
};

MyCircularQueue.prototype.Front = function () {
    if (!this.size) {
        return -1;
    }
    return this.arr[0];
};

MyCircularQueue.prototype.Rear = function () {
    if (!this.size) {
        return -1;
    }
    const res = this.arr[this.size - 1];
    return res;
};

MyCircularQueue.prototype.isEmpty = function () {
    if (this.size) {
        return false;
    }
    return true;
};

MyCircularQueue.prototype.isFull = function () {
    return this.size === this.originalSize;
};

let obj;
let operations;
let values;
let res;
let output = [null];

operations = [
    'MyCircularQueue',
    'enQueue',
    'enQueue',
    'enQueue',
    'enQueue',
    'deQueue',
    'deQueue',
    'isEmpty',
    'isEmpty',
    'Rear',
    'Rear',
    'deQueue',
];

values = [[8], [3], [9], [5], [0], [], [], [], [], [], [], []];

obj = new MyCircularQueue(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual(
    [null, true, true, true, true, true, true, false, false, 0, 0, true],
    output,
);
console.log({ res });

output = [null];
operations = [
    'MyCircularQueue',
    'enQueue',
    'Rear',
    'Rear',
    'deQueue',
    'enQueue',
    'Rear',
    'deQueue',
    'Front',
    'deQueue',
    'deQueue',
    'deQueue',
];

values = [[6], [6], [], [], [], [5], [], [], [], [], [], []];

obj = new MyCircularQueue(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, true, 6, 6, true, true, 5, true, -1, false, false, false], output);
console.log({ res });

output = [null];
operations = [
    'MyCircularQueue',
    'enQueue',
    'enQueue',
    'enQueue',
    'enQueue',
    'Rear',
    'isFull',
    'deQueue',
    'enQueue',
    'Rear',
];

values = [[3], [1], [2], [3], [4], [], [], [], [4], []];

obj = new MyCircularQueue(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, true, true, true, false, 3, true, true, true, 4], output);
console.log({ res });
