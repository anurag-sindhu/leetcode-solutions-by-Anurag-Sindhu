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

var smallestChair = function (times, targetFriend) {
    const incomingTimeVsOutgoingTimeMapping = [];
    const timeVsChairFreeing = [];
    const minHeap = new MinHeap();
    for (let index = 0; index < times.length; index++) {
        minHeap.add(index);
    }
    for (let index = 0; index < times.length; index++) {
        incomingTimeVsOutgoingTimeMapping[times[index][0]] = times[index][1];
    }

    for (let index = 0; index < incomingTimeVsOutgoingTimeMapping.length; index++) {
        //Freeing up the chair, because next guy may sit on this chair itself
        if (timeVsChairFreeing[index]) {
            for (const iterator of timeVsChairFreeing[index]) {
                minHeap.add(iterator);
            }
            timeVsChairFreeing[index] = [];
        }
        if (incomingTimeVsOutgoingTimeMapping[index]) {
            const chairAvailable = minHeap.remove();
            if (index === times[targetFriend][0]) {
                return chairAvailable;
            }
            //when this chair will be freeing
            if (!timeVsChairFreeing[incomingTimeVsOutgoingTimeMapping[index]]) {
                timeVsChairFreeing[incomingTimeVsOutgoingTimeMapping[index]] = [];
            }
            timeVsChairFreeing[incomingTimeVsOutgoingTimeMapping[index]].push(chairAvailable);
        }
    }
};

console.log(
    smallestChair(
        [
            [4, 5],
            [12, 13],
            [5, 6],
            [1, 2],
            [8, 9],
            [9, 10],
            [6, 7],
            [3, 4],
            [7, 8],
            [13, 14],
            [15, 16],
            [14, 15],
            [10, 11],
            [11, 12],
            [2, 3],
            [16, 17],
        ],
        15,
    ) === 0,
);

console.log(
    smallestChair(
        (times = [
            [1, 4],
            [2, 3],
            [4, 6],
        ]),
        (targetFriend = 1),
    ),
);

console.log(
    smallestChair(
        (times = [
            [3, 10],
            [1, 5],
            [2, 6],
        ]),
        (targetFriend = 0),
    ),
);
