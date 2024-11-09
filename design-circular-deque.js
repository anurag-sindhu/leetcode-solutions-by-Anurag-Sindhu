const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

var MyCircularDeque = function(k) {
	this.arr = [];
	this.size = k;
	this.frontIndex = null;
	this.lastIndex = null;
};

MyCircularDeque.prototype.insertFront = function(value) {
	if (!this.arr.length) {
		this.arr.push(value);
		this.frontIndex = 0;
		this.lastIndex = 0;
	} else {
		if (this.arr.length >= this.size) {
			return false;
		}
		this.arr.push(value);
		if (this.frontIndex - 1 < 0) {
			this.frontIndex = this.frontIndex - 1 + this.size;
		} else {
			this.frontIndex = this.frontIndex - 1;
		}
	}
	return null;
};

MyCircularDeque.prototype.insertLast = function(value) {
	if (!this.arr.length) {
		this.arr.push(value);
		this.frontIndex = 0;
		this.lastIndex = 0;
	} else {
		if (this.arr.length >= this.size) {
			return false;
		}
		this.arr.push(value);
		if (this.lastIndex + 1 < 0) {
			this.lastIndex = this.lastIndex + 1 - this.size;
		} else {
			this.lastIndex = this.lastIndex + 1;
		}
	}
	return null;
};

MyCircularDeque.prototype.deleteFront = function() {
	if (!this.arr.length) {
		return false;
	}
	if (this.frontIndex + 1 >= this.size) {
		this.frontIndex = this.frontIndex + 1 - this.size;
	} else {
		this.frontIndex = this.frontIndex + 1;
	}
	return null;
};

MyCircularDeque.prototype.deleteLast = function() {
	if (!this.arr.length) {
		return false;
	}
	if (this.lastIndex - 1 < 0) {
		this.lastIndex = this.lastIndex - 1 + this.size;
	} else {
		this.lastIndex = this.lastIndex - 1;
	}
	return null;
};

MyCircularDeque.prototype.getFront = function() {
	return this.arr[this.frontIndex];
};

MyCircularDeque.prototype.getRear = function() {
	return this.arr[this.lastIndex];
};

MyCircularDeque.prototype.isEmpty = function() {};

MyCircularDeque.prototype.isFull = function() {
	let rightSide = 0;
	let leftSide = 0;
};

let obj;
let operations;
let values;
let res;
let output = [ null ];

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
	'getFront'
];

values = [ [ 3 ], [ 1 ], [ 2 ], [ 3 ], [ 4 ], [], [], [], [ 4 ], [] ];

obj = new MyCircularDeque(...values[0]);
let index = 1;
for (; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([ null, true, true, true, false, 2, true, true, true, 4 ], output);
console.log({ res });
