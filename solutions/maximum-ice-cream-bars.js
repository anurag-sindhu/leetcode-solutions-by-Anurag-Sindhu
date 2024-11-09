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

var maxIceCream = function (costs, coins) {
    const minHeap = new MinHeap();
    for (const iterator of costs) {
        minHeap.add(iterator);
    }
    let iceCream = 0;
    while (coins) {
        const element = minHeap.remove();
        if (element === undefined) {
            break;
        }
        coins -= element;
        if (coins < 0) {
            break;
        } else {
            iceCream++;
        }
    }
    return iceCream;
};

console.log(
    maxIceCream(
        [
            72, 30, 74, 76, 32, 58, 30, 28, 2, 27, 42, 62, 66, 62, 12, 51, 78, 50, 18, 20, 98, 94,
            26, 7, 51, 73, 98, 18, 86, 8, 11, 76, 19, 28, 84, 62, 38, 12, 46, 62, 70, 67, 12, 52,
            17, 32, 62, 94, 12, 88, 98, 6, 70, 92, 98, 84, 7, 52, 86, 19, 10, 62, 99, 42, 2, 58, 27,
            35, 32, 50, 96, 58, 24, 61, 42, 65, 44, 42, 38, 2, 74, 96, 29, 62, 68, 86, 99, 86, 57,
            17, 55, 22, 49, 38, 96, 82, 24, 92, 29, 36,
        ],
        857,
    ) === 40,
);
console.log(maxIceCream((costs = [1, 3, 2, 4, 1]), (coins = 7)) === 4);
console.log(maxIceCream((costs = [1, 6, 3, 1, 2, 5]), (coins = 20)) === 6);
console.log(maxIceCream((costs = [10, 6, 8, 7, 7, 8]), (coins = 5)) === 0);
