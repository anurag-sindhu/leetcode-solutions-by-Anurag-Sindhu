const { areTwoArrayEqual } = require('../../js/compare-two-array.js');

class Heap {
	constructor() {
		this.heap = [];
	}
	swapElements(from, to) {
		const save = this.heap[to];
		this.heap[to] = this.heap[from];
		this.heap[from] = save;
		return;
	}
	findParentIndex(childIndex) {
		const indexFind = (childIndex - 1) / 2;
		if (indexFind !== parseInt(indexFind)) {
			return (childIndex - 2) / 2;
		}
		return indexFind;
	}
	findChildIndex(parentIndex) {
		return { leftChild: 2 * parentIndex + 1, rightChild: 2 * parentIndex + 2 };
	}
	insertMinHeap(element, index) {
		this.heap.push({ value: element, index });
		const length = this.heap.length;
		if (length > 1) {
			let currentIndex = length - 1;
			while (currentIndex) {
				const findParentIndex = this.findParentIndex(currentIndex);
				if (this.heap[findParentIndex].value > this.heap[currentIndex].value) {
					this.swapElements(currentIndex, findParentIndex);
				}
				currentIndex = findParentIndex;
			}
		}
	}
	getMinimumElement() {
		return this.heap[0];
	}
	getMaximumElement() {
		return this.heap[0];
	}
	extractMinimumElement() {
		const length = this.heap.length;
		let indexOfToBeRemovedElement = 0;
		this.heap[indexOfToBeRemovedElement] = this.heap[length - 1];
		this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1);
		while (indexOfToBeRemovedElement < length) {
			let { leftChild, rightChild } = this.findChildIndex(indexOfToBeRemovedElement);
			let findIndexOfSmallChildElement = leftChild;
			if (this.heap[rightChild]) {
				findIndexOfSmallChildElement =
					this.heap[leftChild].value > this.heap[rightChild].value
						? rightChild
						: leftChild;
			}
			if (
				this.heap[findIndexOfSmallChildElement] &&
				this.heap[indexOfToBeRemovedElement] &&
				this.heap[findIndexOfSmallChildElement].value <
					this.heap[indexOfToBeRemovedElement].value
			) {
				this.swapElements(indexOfToBeRemovedElement, findIndexOfSmallChildElement);
				indexOfToBeRemovedElement = findIndexOfSmallChildElement;
			} else {
				return;
			}
		}
	}
	extractMaximumElement() {
		const length = this.heap.length;
		let indexOfToBeRemovedElement = 0;
		this.heap[indexOfToBeRemovedElement] = this.heap[length - 1];
		this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1);
		while (indexOfToBeRemovedElement < length) {
			let { leftChild, rightChild } = this.findChildIndex(indexOfToBeRemovedElement);
			const findLargestIndex =
				this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
			if (this.heap[findLargestIndex] > this.heap[indexOfToBeRemovedElement]) {
				this.swapElements(indexOfToBeRemovedElement, findLargestIndex);
				indexOfToBeRemovedElement = findLargestIndex;
			} else {
				return;
			}
		}
	}
	getHeap() {
		return this.heap;
	}
}
var NumberContainers = function() {
	this.numberToIndexMapping = {};
	this.indexToNumberMapping = {};
	return null;
};

NumberContainers.prototype.change = function(index, number) {
	try {
		if (!this.indexToNumberMapping[index]) {
			this.indexToNumberMapping[index] = number;
		} else {
			const elementsRemoved = [];
			let minimumElement = undefined;
			if (
				this.numberToIndexMapping[this.indexToNumberMapping[index]] &&
				this.numberToIndexMapping[this.indexToNumberMapping[index]].heap.length
			) {
				minimumElement = this.numberToIndexMapping[
					this.indexToNumberMapping[index]
				].getMinimumElement().value;
			}
			while (minimumElement !== undefined && minimumElement !== index) {
				elementsRemoved.push(minimumElement);
				this.numberToIndexMapping[this.indexToNumberMapping[index]].extractMinimumElement();
				minimumElement = undefined;
				if (
					this.numberToIndexMapping[this.indexToNumberMapping[index]] &&
					this.numberToIndexMapping[this.indexToNumberMapping[index]].heap.length
				) {
					minimumElement = this.numberToIndexMapping[
						this.indexToNumberMapping[index]
					].getMinimumElement().value;
				}
			}
			if (
				this.numberToIndexMapping[this.indexToNumberMapping[index]] &&
				this.numberToIndexMapping[this.indexToNumberMapping[index]].heap.length
			) {
				this.numberToIndexMapping[this.indexToNumberMapping[index]].extractMinimumElement();
			}
			for (const iterator of elementsRemoved) {
				this.numberToIndexMapping[this.indexToNumberMapping[index]].insertMinHeap(iterator);
			}
		}
		if (!this.numberToIndexMapping[number]) {
			this.numberToIndexMapping[number] = new Heap();
		}
		this.numberToIndexMapping[number].insertMinHeap(index);
		return null;
	} catch (e) {
		console.log({ e });
	}
};

NumberContainers.prototype.find = function(number) {
	try {
		return (
			(this.numberToIndexMapping[number] &&
				this.numberToIndexMapping[number].heap.length &&
				this.numberToIndexMapping[number].getMinimumElement().value) ||
			-1
		);
	} catch (e) {
		console.log('object');
	}
};

let obj;
let res;
let operations;
let values;
let output = [ null ];

obj = new NumberContainers();
operations = [
	'NumberContainers',
	'find',
	'change',
	'change',
	'change',
	'change',
	'find',
	'change',
	'find'
];
values = [ [], [ 10 ], [ 2, 10 ], [ 1, 10 ], [ 3, 10 ], [ 5, 10 ], [ 10 ], [ 1, 20 ], [ 10 ] ];

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}

//[-1,null,null,null,null,1,null,2]
console.log({ output });
obj = new NumberContainers();
output = [ null ];
operations = [
	'NumberContainers',
	'find',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'find',
	'change',
	'find'
];
values = [
	[],
	[ 10 ],
	[ 20, 10 ],
	[ 10, 10 ],
	[ 13, 10 ],
	[ 50, 10 ],
	[ 6, 10 ],
	[ 70, 10 ],
	[ 8, 10 ],
	[ 10 ],
	[ 1, 20 ],
	[ 10 ]
];

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}

//[null,-1,null,null,null,null,null,null,null,6,null,6]
console.log({ output });
output = [ null ];
obj = new NumberContainers();
operations = [
	'NumberContainers',
	'change',
	'change',
	'change',
	'change',
	'find',
	'change',
	'change',
	'find',
	'find',
	'change',
	'change',
	'change',
	'find',
	'find',
	'change',
	'change',
	'find',
	'find',
	'change',
	'change',
	'change',
	'find',
	'find',
	'find',
	'change',
	'change',
	'find',
	'change',
	'change',
	'change',
	'change',
	'change',
	'find',
	'find',
	'find',
	'change',
	'find',
	'change',
	'change',
	'find',
	'change',
	'change',
	'change',
	'change',
	'find',
	'find',
	'change',
	'find',
	'find',
	'change',
	'find',
	'change',
	'find',
	'find',
	'find',
	'find',
	'find',
	'change',
	'find',
	'find',
	'find',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'change',
	'find',
	'change',
	'find',
	'find',
	'find',
	'find',
	'change',
	'find',
	'change',
	'find',
	'find',
	'change',
	'find',
	'change',
	'change',
	'change',
	'find',
	'find',
	'change',
	'find',
	'find',
	'change',
	'change',
	'change',
	'find',
	'change',
	'change',
	'change',
	'change',
	'find'
];
values = [
	[],
	[ 26, 137 ],
	[ 120, 170 ],
	[ 182, 3 ],
	[ 62, 170 ],
	[ 170 ],
	[ 39, 107 ],
	[ 182, 137 ],
	[ 137 ],
	[ 137 ],
	[ 62, 121 ],
	[ 152, 16 ],
	[ 23, 117 ],
	[ 180 ],
	[ 187 ],
	[ 26, 30 ],
	[ 9, 137 ],
	[ 107 ],
	[ 117 ],
	[ 152, 54 ],
	[ 39, 117 ],
	[ 23, 178 ],
	[ 92 ],
	[ 16 ],
	[ 170 ],
	[ 10, 170 ],
	[ 182, 30 ],
	[ 9 ],
	[ 45, 178 ],
	[ 26, 191 ],
	[ 78, 67 ],
	[ 28, 137 ],
	[ 30, 165 ],
	[ 191 ],
	[ 121 ],
	[ 93 ],
	[ 26, 117 ],
	[ 109 ],
	[ 39, 33 ],
	[ 28, 165 ],
	[ 168 ],
	[ 177, 178 ],
	[ 62, 30 ],
	[ 22, 17 ],
	[ 74, 18 ],
	[ 22 ],
	[ 191 ],
	[ 9, 33 ],
	[ 188 ],
	[ 116 ],
	[ 120, 67 ],
	[ 133 ],
	[ 78, 16 ],
	[ 54 ],
	[ 33 ],
	[ 104 ],
	[ 33 ],
	[ 139 ],
	[ 86, 33 ],
	[ 178 ],
	[ 67 ],
	[ 69 ],
	[ 186, 128 ],
	[ 194, 3 ],
	[ 92, 178 ],
	[ 65, 87 ],
	[ 62, 87 ],
	[ 145, 118 ],
	[ 25, 133 ],
	[ 100, 186 ],
	[ 186, 28 ],
	[ 186 ],
	[ 195, 178 ],
	[ 67 ],
	[ 67 ],
	[ 157 ],
	[ 128 ],
	[ 25, 3 ],
	[ 76 ],
	[ 102, 78 ],
	[ 170 ],
	[ 54 ],
	[ 120, 168 ],
	[ 133 ],
	[ 37, 137 ],
	[ 16, 165 ],
	[ 26, 117 ],
	[ 18 ],
	[ 35 ],
	[ 65, 10 ],
	[ 170 ],
	[ 108 ],
	[ 9, 18 ],
	[ 145, 173 ],
	[ 120, 14 ],
	[ 173 ],
	[ 195, 46 ],
	[ 86, 78 ],
	[ 45, 46 ],
	[ 86, 121 ],
	[ 182 ]
];

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
console.log({ output });
//[null,null,null,null,null,62,null,null,26,26,null,null,null,-1,-1,null,null,39,23,null,null,null,-1,-1,120,null,null,-1,null,null,null,null,null,26,62,-1,null,-1,null,null,-1,null,null,null,null,-1,-1,null,-1,-1,null,-1,null,152,9,-1,9,-1,null,23,120,-1,null,null,null,null,null,null,null,null,null,100,null,120,120,-1,-1,null,-1,null,10,152,null,-1,null,null,null,74,-1,null,10,-1,null,null,null,145,null,null,null,null,-1]

output = [ null ];
obj = new NumberContainers();
operations = [
	'NumberContainers',
	'change',
	'change',
	'find',
	'find',
	'find',
	'change',
	'find',
	'find',
	'change',
	'find',
	'change',
	'change',
	'change',
	'find',
	'find',
	'change',
	'find',
	'change',
	'change',
	'change'
];
values = [
	[],
	[ 25, 50 ],
	[ 56, 31 ],
	[ 50 ],
	[ 50 ],
	[ 43 ],
	[ 30, 50 ],
	[ 31 ],
	[ 43 ],
	[ 25, 20 ],
	[ 50 ],
	[ 56, 43 ],
	[ 68, 31 ],
	[ 56, 31 ],
	[ 20 ],
	[ 43 ],
	[ 25, 43 ],
	[ 43 ],
	[ 56, 31 ],
	[ 54, 43 ],
	[ 63, 43 ]
];

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}
res = areTwoArrayEqual(output, [
	null,
	null,
	null,
	25,
	25,
	-1,
	null,
	56,
	-1,
	null,
	30,
	null,
	null,
	null,
	25,
	-1,
	null,
	25,
	null,
	null,
	null
]);
console.log({ res });
output = [ null ];
