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
	insertMinHeap(element) {
		this.heap.push(element);
		const length = this.heap.length;
		if (length > 1) {
			let currentIndex = length - 1;
			while (currentIndex) {
				const findParentIndex = this.findParentIndex(currentIndex);
				if (this.heap[findParentIndex] > this.heap[currentIndex]) {
					this.swapElements(currentIndex, findParentIndex);
				}
				currentIndex = findParentIndex;
			}
		}
	}
	insertMaxHeap(element, index) {
		this.heap.push({ element, index });
		const length = this.heap.length;
		if (length > 1) {
			let currentIndex = length - 1;
			while (currentIndex) {
				const findParentIndex = this.findParentIndex(currentIndex);
				if (this.heap[findParentIndex].element < this.heap[currentIndex].element) {
					this.swapElements(currentIndex, findParentIndex);
				}
				currentIndex = findParentIndex;
			}
		}
	}
	getMinimumElement() {
		// expecting a min-heapified array, always returns roof node
		return this.heap[0];
	}
	getMaximumElement() {
		// expecting a max-heapified array, always returns roof node
		return this.heap[0];
	}
	extractMinimumElement() {
		// expecting a min-heapified array, always delete roof node
		const length = this.heap.length;
		let indexOfToBeRemovedElement = 0;
		this.heap[indexOfToBeRemovedElement] = this.heap[length - 1];
		this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1);
		while (indexOfToBeRemovedElement < length) {
			let { leftChild, rightChild } = this.findChildIndex(indexOfToBeRemovedElement);
			const findLargestIndex =
				this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
			if (this.heap[findLargestIndex] < this.heap[indexOfToBeRemovedElement]) {
				this.swapElements(indexOfToBeRemovedElement, findLargestIndex);
				indexOfToBeRemovedElement = findLargestIndex;
			} else {
				return;
			}
		}
	}
	extractMaximumElement() {
		// expecting a max-heapified array, always delete roof node
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

var FoodRatings = function(foods, cuisines, ratings) {
	this.foodToCuisineMapping = {};
	this.cuisineToRatingMapping = {};
	for (let index = 0; index < foods.length; index++) {
		this.foodToCuisineMapping[foods[index]] = cuisines[index];
		if (!this.cuisineToRatingMapping[cuisines[index]]) {
			this.cuisineToRatingMapping[cuisines[index]] = new Heap();
		}
		this.cuisineToRatingMapping[cuisines[index]].insertMaxHeap(ratings[index], foods[index]);
	}
	return null;
};

FoodRatings.prototype.changeRating = function(food, newRating) {
	const temp = this.cuisineToRatingMapping[this.foodToCuisineMapping[food]];
	const toBeAdded = [];
	let maxElement = this.cuisineToRatingMapping[
		this.foodToCuisineMapping[food]
	].getMaximumElement();
	temp && temp.heap.length && temp.extractMaximumElement();
	while (maxElement.index !== food) {
		toBeAdded.push(maxElement);
		maxElement = this.cuisineToRatingMapping[
			this.foodToCuisineMapping[food]
		].getMaximumElement();
		temp && temp.heap.length && temp.extractMaximumElement();
	}
	temp.insertMaxHeap(newRating, food);
	for (const iterator of toBeAdded) {
		temp.insertMaxHeap(iterator.element, iterator.index);
	}
	return null;
};

FoodRatings.prototype.highestRated = function(cuisine) {
	return this.cuisineToRatingMapping[cuisine].getMaximumElement().index;
};

let obj;
let operations;
let values;
let res;
let output = [ null ];

operations = [
	'FoodRatings',
	'highestRated',
	'highestRated',
	'changeRating',
	'highestRated',
	'changeRating',
	'highestRated'
];

values = [
	[
		[ 'kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi' ],
		[ 'korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean' ],
		[ 9, 12, 8, 15, 14, 7 ]
	],
	[ 'korean' ],
	[ 'japanese' ],
	[ 'sushi', 16 ],
	[ 'japanese' ],
	[ 'ramen', 16 ],
	[ 'japanese' ]
];

obj = new FoodRatings(...values[0]);

for (let index = 1; index < operations.length; index++) {
	output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([ null, 'kimchi', 'ramen', null, 'sushi', null, 'ramen' ], output);
console.log({ res });
