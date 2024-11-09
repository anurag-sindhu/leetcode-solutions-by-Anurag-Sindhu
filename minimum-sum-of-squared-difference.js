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
				if (this.heap[findParentIndex].value < this.heap[currentIndex].value) {
					this.swapElements(currentIndex, findParentIndex);
				}
				currentIndex = findParentIndex;
			}
		}
	}
	insertMaxHeap(element) {
		this.heap.push(element);
		const length = this.heap.length;
		if (length > 1) {
			let currentIndex = length - 1;
			while (currentIndex) {
				const findParentIndex = this.findParentIndex(currentIndex);
				if (this.heap[findParentIndex] < this.heap[currentIndex]) {
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
			let findIndexOfBigChildElement = leftChild;
			if (this.heap[rightChild]) {
				findIndexOfBigChildElement =
					this.heap[leftChild].value < this.heap[rightChild].value
						? rightChild
						: leftChild;
			}
			if (
				this.heap[findIndexOfBigChildElement] &&
				this.heap[indexOfToBeRemovedElement] &&
				this.heap[findIndexOfBigChildElement].value >
					this.heap[indexOfToBeRemovedElement].value
			) {
				this.swapElements(indexOfToBeRemovedElement, findIndexOfBigChildElement);
				indexOfToBeRemovedElement = findIndexOfBigChildElement;
			} else {
				return;
			}
		}
	}
	getHeap() {
		return this.heap;
	}
}

var minSumSquareDiff = function(nums1, nums2, k1, k2) {
	const config = {};
	for (let index = 0; index < nums1.length; index++) {
		const difference = Math.abs(nums1[index] - nums2[index]);
		if (config[difference] === undefined) {
			config[difference] = 0;
		}
		config[difference] += 1;
	}
	const heap = new Heap();
	for (const key in config) {
		heap.insertMinHeap(Number(key), config[key]);
	}
	let sum = 0;
	let totalChanges = k1 + k2;
	while (totalChanges > 0) {
		let getMaximumElementValue = heap.getMaximumElement().value;
		let getMaximumElementTimes = heap.getMaximumElement().index;
		heap.extractMaximumElement();
		let getNextMaximumElementValue = heap.getMaximumElement().value;
		const difference = getMaximumElementValue - getNextMaximumElementValue;
		const tempProd = difference * getMaximumElementTimes;
		if (tempProd >= totalChanges) {
			if (totalChanges === tempProd) {
				sum += totalChanges * Math.pow(getMaximumElementValue - difference, 2);
			} else {
				sum +=
					totalChanges * Math.pow(getMaximumElementValue - difference, 2) +
					(getMaximumElementTimes - totalChanges) *
						Math.pow(getMaximumElementValue - difference, 2);
			}
			break;
		} else {
			sum +=
				tempProd * Math.pow(getMaximumElementValue - difference, 2) +
				(totalChanges - tempProd) * Math.pow(getMaximumElementValue - difference, 2);
			totalChanges -= tempProd;
		}
	}
	while (heap.heap.length) {
		const getMaximumElementValue = heap.getMaximumElement().value;
		const getMaximumElementTimes = heap.getMaximumElement().index;
		sum += Math.pow(getMaximumElementTimes * getMaximumElementValue, 2);
		heap.extractMaximumElement();
	}
	return config;
};

console.log(
	minSumSquareDiff((nums1 = [ 1, 4, 10, 12 ]), (nums2 = [ 7, 9, 6, 9 ]), (k1 = 3), (k2 = 1))
);

console.log(
	minSumSquareDiff((nums1 = [ 1, 4, 10, 12 ]), (nums2 = [ 5, 8, 6, 9 ]), (k1 = 3), (k2 = 1))
);

console.log(
	minSumSquareDiff((nums1 = [ 1, 4, 10, 12 ]), (nums2 = [ 5, 8, 6, 9 ]), (k1 = 1), (k2 = 1))
);

console.log(
	minSumSquareDiff((nums1 = [ 1, 2, 3, 4 ]), (nums2 = [ 2, 10, 20, 19 ]), (k1 = 0), (k2 = 0))
);
