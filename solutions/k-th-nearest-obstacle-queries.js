class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
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

    push(value) {
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

    pop() {
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

    top() {
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

var resultsArray = function (queries, k) {
    const dist = [];
    const out = [];
    const heap = new MaxHeap();
    for (let index = 0; index < queries.length; index++) {
        const element = queries[index];
        if (index == 10) {
            console.log('object');
        }
        const temp = Math.abs(element[0]) + Math.abs(element[1]);
        if (heap.heap.length >= k - 1) {
            if (heap.heap.length < k) {
                heap.push(temp);
                out.push(heap.heap[0]);
            } else {
                const lastElement = heap.heap[0];
                if (lastElement > temp) {
                    heap.pop();
                    heap.push(temp);
                }
                out.push(heap.heap[0]);
            }
            console.log('object');
        } else {
            heap.push(temp);
            out.push(-1);
        }
    }
    return out;
};
//[3 7 5 3] = > 3 3
console.log(
    resultsArray(
        (queries = [
            [7, 5],
            [-3, -2],
            [-1, -5],
            [2, -1],
            [-10, 6],
            [-1, -4],
            [9, -1],
            [-1, 1],
            [-9, -7],
            [1, 6],
            [-9, 0],
            [9, -6],
            [6, -10],
            [2, 1],
            [-9, -2],
        ]),
        (k = 11),
    ),
); //[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,16,16,16,15,12]
console.log(
    resultsArray(
        (queries = [
            [1, 2],
            [3, 4],
            [2, 3],
            [-3, 0],
        ]),
        (k = 2),
    ),
); //[-1,7,5,3]
console.log(
    resultsArray(
        (queries = [
            [5, 5],
            [4, 4],
            [3, 3],
        ]),
        (k = 1),
    ),
); //[10,8,6]
