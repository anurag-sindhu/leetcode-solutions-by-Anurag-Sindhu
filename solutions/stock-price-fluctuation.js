class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return parseInt(index / 2);
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
        while (this.heap.length > 1) {
            const parentIndex = this.getParentIndex(currentWorkingIndex);
            if (this.heap[parentIndex] < this.heap[currentWorkingIndex]) {
                this.swap(parentIndex, currentWorkingIndex);
                currentWorkingIndex = parentIndex;
                if (parentIndex === 0) {
                    break;
                }
            } else {
                break;
            }
        }
        return;
    }
    remove() {
        const biggestElement = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return biggestElement;
        }
        const lastElement = this.heap.pop();
        this.heap[0] = lastElement;
        let currentWorkingIndex = 0;
        while (this.heap.length > 1) {
            const childIndexes = this.getChildIndexes(currentWorkingIndex);
            if (
                this.heap[childIndexes.left] !== undefined &&
                this.heap[childIndexes.right] !== undefined
            ) {
            }
            const biggestIndex =
                this.heap[childIndexes.left] < this.heap[childIndexes.right]
                    ? childIndexes.right
                    : childIndexes.left;
            if (this.heap[biggestIndex] > this.heap[currentWorkingIndex]) {
                this.swap(biggestIndex, currentWorkingIndex);
                currentWorkingIndex = biggestIndex;
                if (currentWorkingIndex === this.heap.length - 1) {
                    break;
                }
            } else {
                break;
            }
        }
        return biggestElement;
    }
}

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

    add(element, time) {
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

var StockPrice = function () {
    this.obj = {};
    this.cur = 0;
    this.min = new MinHeap();
    this.max = new MaxHeap();
};

StockPrice.prototype.update = function (timestamp, price) {
    this.min.add();

    return null;
};

StockPrice.prototype.current = function () {
    return this.obj[this.cur];
};

StockPrice.prototype.maximum = function () {
    return Math.max(...Object.values(this.max));
};

StockPrice.prototype.minimum = function () {
    return Math.min(...Object.values(this.min));
};

var obj = new StockPrice();
let operations = [
    'StockPrice',
    'update',
    'update',
    'current',
    'maximum',
    'update',
    'maximum',
    'update',
    'minimum',
];
let values = [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []];

//[null, null, null, 5, 10, null, 5, null, 2]
for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
}
operations = [
    'StockPrice',
    'update',
    'maximum',
    'current',
    'minimum',
    'maximum',
    'maximum',
    'maximum',
    'minimum',
    'minimum',
    'maximum',
    'update',
    'maximum',
    'minimum',
    'update',
    'maximum',
    'minimum',
    'current',
    'maximum',
    'update',
    'minimum',
    'maximum',
    'update',
    'maximum',
    'maximum',
    'current',
    'update',
    'current',
    'minimum',
    'update',
    'update',
    'minimum',
    'minimum',
    'update',
    'current',
    'update',
    'maximum',
    'update',
    'minimum',
];
values = [
    [],
    [38, 2308],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [47, 7876],
    [],
    [],
    [58, 1866],
    [],
    [],
    [],
    [],
    [43, 121],
    [],
    [],
    [40, 5339],
    [],
    [],
    [],
    [32, 5339],
    [],
    [],
    [43, 6414],
    [49, 9369],
    [],
    [],
    [36, 3192],
    [],
    [48, 1006],
    [],
    [53, 8013],
    [],
];
for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
}
console.log('object');
