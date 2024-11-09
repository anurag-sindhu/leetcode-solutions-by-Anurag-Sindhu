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

var maxConsecutive = function(bottom, top, special) {
	const heap = new Heap();
	for (const iterator of special) {
		heap.insertMinHeap(iterator);
	}
	let maxFloor = -Infinity;
	let currentFloor = bottom;
	let tempCurrentFloorFlag = false;
	while (currentFloor <= top) {
		if (currentFloor === bottom && !tempCurrentFloorFlag) {
			const minElement = heap.getMinimumElement().value;
			heap.extractMinimumElement();
			const tempDifferent = minElement - currentFloor;
			if (maxFloor < tempDifferent) {
				maxFloor = tempDifferent;
			}
			currentFloor = minElement;
			tempCurrentFloorFlag = true;
		} else {
			if (currentFloor === top) {
				if (maxFloor < 0) {
					maxFloor = 0;
				}
				break;
			}
			if (heap.heap.length) {
				const minElement = heap.getMinimumElement().value;
				heap.extractMinimumElement();
				const tempDifferent = minElement - currentFloor - 1;
				if (maxFloor < tempDifferent) {
					maxFloor = tempDifferent;
				}
				currentFloor = minElement;
			} else {
				const tempDifferent = top - currentFloor;
				if (maxFloor < tempDifferent) {
					maxFloor = tempDifferent;
				}
				break;
			}
		}
	}
	return maxFloor;
};

console.log(maxConsecutive((bottom = 6), (top = 8), (special = [ 7, 6, 8 ])));
console.log(maxConsecutive((bottom = 2), (top = 9), (special = [ 4, 6 ])));
console.log(maxConsecutive(28, 50, [ 35, 48 ]));
