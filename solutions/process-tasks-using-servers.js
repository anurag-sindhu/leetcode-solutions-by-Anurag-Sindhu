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

    add(value, originalIndex) {
        const element = { value, originalIndex };
        this.heap.push(element);
        let currentWorkingIndex = this.heap.length - 1;
        while (currentWorkingIndex > 0) {
            const parentIndex = this.getParentIndex(currentWorkingIndex);
            if (this.heap[parentIndex].value > this.heap[currentWorkingIndex].value) {
                this.swap(parentIndex, currentWorkingIndex);
                currentWorkingIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

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
                smallestIndex =
                    leftChild.value < rightChild.value ? childIndexes.left : childIndexes.right;
            } else if (leftChild !== undefined) {
                smallestIndex = childIndexes.left;
            } else {
                smallestIndex = childIndexes.right;
            }

            if (this.heap[smallestIndex].value < this.heap[currentWorkingIndex].value) {
                this.swap(smallestIndex, currentWorkingIndex);
                currentWorkingIndex = smallestIndex;
            } else {
                break;
            }
        }
        let minHeapIndex = 0;
        const firstElementValue = this.heap[0].value;
        const firstElementMinOriginalIndex = this.heap[0].originalIndex;
        let newElementMinOriginalIndex = firstElementMinOriginalIndex;
        for (let index = 1; index < this.heap.length; index++) {
            if (this.heap[index].value === firstElementValue) {
                newElementMinOriginalIndex = Math.min(
                    newElementMinOriginalIndex,
                    this.heap[index].originalIndex,
                );
                minHeapIndex = index;
            } else {
                break;
            }
        }
        this.swap(0, minHeapIndex);
        return smallestElement;
    }
}
var assignTasks = function (servers, tasks) {
    const minHeap = new MinHeap();
    for (let index = 0; index < servers.length; index++) {
        minHeap.add(servers[index], index);
    }
    let output = [];
    let currentSecond = 0;
    const freeAtSecondsObj = {};
    for (const iterator of tasks) {
        if (freeAtSecondsObj[currentSecond]) {
            for (const iterator of freeAtSecondsObj[currentSecond]) {
                minHeap.add(iterator.value, iterator.originalIndex);
            }
            freeAtSecondsObj[currentSecond] = [];
        }
        const minHeapRemoved = minHeap.remove();
        if (!freeAtSecondsObj[currentSecond + iterator]) {
            freeAtSecondsObj[currentSecond + iterator] = [];
        }
        freeAtSecondsObj[currentSecond++ + iterator].push({
            value: minHeapRemoved.value,
            originalIndex: minHeapRemoved.originalIndex,
        });
        output.push(minHeapRemoved.originalIndex);
    }
    return output;
};
console.log(assignTasks((servers = [5, 2, 2, 2, 2]), (tasks = [2, 1, 2, 4, 5, 2, 1]))); //[1,2,1,2,1,3,4]
console.log(assignTasks((servers = [5, 1, 1, 2, 2]), (tasks = [2, 1, 2, 4, 5, 2, 1]))); //[1,2,1,2,1,3,4]
console.log(assignTasks((servers = [5, 1, 4, 3, 2]), (tasks = [2, 1, 2, 4, 5, 2, 1])));
console.log(assignTasks((servers = [3, 3, 2]), (tasks = [1, 2, 3, 2, 1, 2])));
