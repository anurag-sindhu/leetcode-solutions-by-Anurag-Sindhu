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
	getHeap() {
		return this.heap;
	}
}
var maximumBags = function(capacity, rocks, additionalRocks) {
	const heap = new Heap();
	const differences = [];
	for (let index = 0; index < capacity.length; index++) {
		differences.push(capacity[index] - rocks[index]);
	}
	const differencesConfig = {};
	for (const iterator of differences) {
		if (differencesConfig[iterator] === undefined) {
			differencesConfig[iterator] = 0;
		}
		differencesConfig[iterator] += 1;
	}
	for (const key in differencesConfig) {
		heap.insertMinHeap(Number(key), differencesConfig[key]);
	}
	let output = 0;
	while (additionalRocks > 0 && heap.heap.length) {
		const totalAdditionalRequiredRocks = Number(heap.getMinimumElement().value);
		const totalRocksAvailableOnSameCost = heap.getMinimumElement().index;
		heap.extractMinimumElement();
		const totalCost = totalAdditionalRequiredRocks * totalRocksAvailableOnSameCost;
		const leftAdditionalRocks = additionalRocks - totalCost;
		if (leftAdditionalRocks >= 0) {
			output += totalRocksAvailableOnSameCost;
			additionalRocks -= totalCost;
		} else {
			const possible = parseInt(additionalRocks / totalAdditionalRequiredRocks);
			output += possible;
			additionalRocks -= possible * totalAdditionalRequiredRocks;
		}
	}
	return output;
};

console.log(
	maximumBags(
		[
			54,
			18,
			91,
			49,
			51,
			45,
			58,
			54,
			47,
			91,
			90,
			20,
			85,
			20,
			90,
			49,
			10,
			84,
			59,
			29,
			40,
			9,
			100,
			1,
			64,
			71,
			30,
			46,
			91
		],
		[
			14,
			13,
			16,
			44,
			8,
			20,
			51,
			15,
			46,
			76,
			51,
			20,
			77,
			13,
			14,
			35,
			6,
			34,
			34,
			13,
			3,
			8,
			1,
			1,
			61,
			5,
			2,
			15,
			18
		],
		77
	) === 13
);
console.log(
	maximumBags((capacity = [ 10, 2, 2 ]), (rocks = [ 2, 2, 0 ]), (additionalRocks = 100)) === 3
);
console.log(
	maximumBags((capacity = [ 2, 3, 4, 5 ]), (rocks = [ 1, 2, 4, 4 ]), (additionalRocks = 2)) === 3
);
