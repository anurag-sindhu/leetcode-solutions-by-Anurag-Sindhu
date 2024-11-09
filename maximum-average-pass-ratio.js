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
  insertMinHeap(element, ind) {
    this.heap.push({ value: element, ind });
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
    const max = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;

    let index = 0;
    const length = this.heap.length;
    const current = this.heap[0].value;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.value > current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex].value;
        if (
          (swap === null && rightChild.value > current.value) ||
          (swap !== null && rightChild.value > leftChild.value)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.heap[index].value = this.heap[swap].value;
      this.heap[swap].value = current.value;
      index = swap;
    }

    return max;
  }
  getHeap() {
    return this.heap;
  }
}

var maxAverageRatio = function (classes, extraStudents) {
  const minHeap = new Heap();
  (function () {
    for (let index = 0; index < classes.length; index++) {
      const [pass, student] = classes[index];
      minHeap.insertMinHeap(pass / student, index);
    }
  })();

  let heap = minHeap.getHeap();
  while (extraStudents--) {
    let extractMinimumElement = minHeap.extractMinimumElement();
    const [pass, student] = classes[extractMinimumElement.ind];
    classes[extractMinimumElement.ind] = [pass + 1, student + 1];
    minHeap.insertMinHeap((pass + 1) / (student + 1), extractMinimumElement.ind);
  }

  function getAverage(heap) {
    let sum = 0;
    for (let index = 0; index < heap.length; index++) {
      sum += heap[index].value;
    }
    return sum / classes.length;
  }

  const res = getAverage(heap);
  return res;
};



console.log(
  maxAverageRatio(
    (classes = [
      [2, 4],
      [3, 9],
      [4, 5],
      [2, 10]
    ]),
    (extraStudents = 4)
  )
);

console.log(
  maxAverageRatio(
    (classes = [
      [1, 2],
      [3, 5],
      [2, 2]
    ]),
    (extraStudents = 2)
  )
);
