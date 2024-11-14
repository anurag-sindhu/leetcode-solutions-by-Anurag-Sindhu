class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(from, to) {
        const store = this.heap[from];
        this.heap[from] = this.heap[to];
        this.heap[to] = store;
    }

    getChildIndexes(index) {
        return {
            left: index * 2 + 1,
            right: index * 2 + 2,
        };
    }

    add(element) {
        this.heap.push(element);
        let currentWorkingIndex = this.heap.length - 1;
        while (currentWorkingIndex > 0) {
            const parentIndex = this.getParentIndex(currentWorkingIndex);
            if (this.heap[parentIndex] > this.heap[currentWorkingIndex]) {
                this.swap(parentIndex, currentWorkingIndex);
                currentWorkingIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        const smallestElement = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return smallestElement;
        }
        const lastElement = this.heap.pop();
        this.heap[0] = lastElement;
        let currentWorkingIndex = 0;
        while (true) {
            const childIndexes = this.getChildIndexes(currentWorkingIndex);
            const leftChild =
                childIndexes.left < this.heap.length ? this.heap[childIndexes.left] : undefined;
            const rightChild =
                childIndexes.right < this.heap.length ? this.heap[childIndexes.right] : undefined;
            if (leftChild === undefined && rightChild === undefined) {
                break;
            }
            let smallestIndex;
            if (leftChild !== undefined && rightChild !== undefined) {
                smallestIndex = leftChild < rightChild ? childIndexes.left : childIndexes.right;
            } else if (leftChild !== undefined) {
                smallestIndex = childIndexes.left;
            } else {
                smallestIndex = childIndexes.right;
            }
            if (this.heap[smallestIndex] < this.heap[currentWorkingIndex]) {
                this.swap(smallestIndex, currentWorkingIndex);
                currentWorkingIndex = smallestIndex;
            } else {
                break;
            }
        }
        return smallestElement;
    }
}

const heap = new MinHeap();
heap.add(15);
heap.add(20);
heap.add(50);
heap.add(30);
heap.add(55);
heap.add(10);
heap.add(8);
heap.add(16);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
