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

const heap = new MaxPriorityQueue();
heap.enqueue(15);
heap.enqueue(20);
heap.enqueue(50);
heap.enqueue(30);
heap.enqueue(55);
heap.enqueue(10);
heap.enqueue(8);
heap.enqueue(16);
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
