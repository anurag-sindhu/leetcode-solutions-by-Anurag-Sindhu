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

var equalSubstring = function(s, t, maxCost) {
	const asciiDifferenceArray = [];
	for (let index = 0; index < s.length; index++) {
		const asciiDifference = Math.abs(s.charCodeAt(index) - t.charCodeAt(index));
		asciiDifferenceArray.push(asciiDifference);
	}
	const costing = {};
	for (const iterator of asciiDifferenceArray) {
		if (!costing[iterator]) {
			costing[iterator] = 0;
		}
		costing[iterator] += 1;
	}
	const heap = new Heap();
	for (const key in costing) {
		heap.insertMinHeap(Number(key), costing[key]);
	}
	let output = 0;
	while (heap.heap.length) {
		const minimumElement = heap.getMinimumElement();
		const totalCostRequired = minimumElement.value * minimumElement.index;
		if (totalCostRequired <= maxCost) {
			output += minimumElement.index;
			maxCost -= totalCostRequired;
		} else {
			const possible = parseInt(maxCost / minimumElement.value);
			if (possible) {
				output += possible;
				maxCost -= possible * minimumElement.value;
			}
		}
		heap.extractMinimumElement();
		if (!maxCost) {
			break;
		}
	}
	return output;
};

console.log(equalSubstring('krrgw', 'zjxss', 19) === 2);
console.log(equalSubstring((s = 'abcd'), (t = 'acde'), (maxCost = 0)) === 1);
console.log(equalSubstring((s = 'abcd'), (t = 'cdef'), (maxCost = 3)));
console.log(equalSubstring((s = 'abcd'), (t = 'bcdf'), (maxCost = 3)));
