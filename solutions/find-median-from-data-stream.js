const { areTwoArrayEqual } = require('../javascript/compare-two-array');

class MinPriorityQueue {
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

    size() {
        return this.heap.length;
    }

    front() {
        return this.heap[0];
    }

    enqueue(element) {
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

    dequeue() {
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

class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    front() {
        return this.heap[0];
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    getParent(i) {
        return this.heap[this.getParentIndex(i)];
    }

    getLeftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }

    getRightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    dequeue() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return maxValue;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }

    peek() {
        if (this.heap.length > 0) {
            return this.heap[0];
        }
        return null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

var MedianFinder = function () {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
    return null;
};

MedianFinder.prototype.addNum = function (num) {
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue());
    let lengthOfMinHeap = this.minHeap.size();
    let lengthOfMaxHeap = this.maxHeap.size();
    if (lengthOfMinHeap < lengthOfMaxHeap) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    } else {
        console.log('');
    }
    return null;
};

MedianFinder.prototype.findMedian = function () {
    let minHeapRoot = this.minHeap.size() && this.minHeap.front();
    let maxHeapRoot = this.maxHeap.size() && this.maxHeap.front();
    let lengthOfMinHeap = this.minHeap.size();
    let lengthOfMaxHeap = this.maxHeap.size();
    if (lengthOfMinHeap > lengthOfMaxHeap) {
        return minHeapRoot;
    } else {
        return (minHeapRoot + maxHeapRoot) / 2; // 21 and 34 example, pop 1 and 3 and find average
    }
};
let obj;
let operations;
let values;
let res;
let output = [null];

operations = [
    'MedianFinder',
    'addNum',
    'findMedian',
    'addNum',
    'findMedian',
    'addNum',
    'findMedian',
    'addNum',
    'findMedian',
    'addNum',
    'findMedian',
];

values = [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []];

output = [null];

obj = new MedianFinder(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, null, -1.0, null, -1.5, null, -2.0, null, -2.5, null, -3.0], output);
console.log({ res });

operations = ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'];

values = [[], [100], [150], [], [10], []];

output = [null];

obj = new MedianFinder(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual([null, null, null, 125.0, null, 100.0], output);
console.log({ res });
