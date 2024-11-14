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
      return biggestElement
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
      const biggestIndex = this.heap[childIndexes.left] <
        this.heap[childIndexes.right]
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

const heap = new MaxHeap();
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
