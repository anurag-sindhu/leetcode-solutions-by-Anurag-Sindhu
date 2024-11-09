var findKthLargest = function (nums, k) {
  let heap = [];
  const swapElements = (fromIndex, toIndex) => {
    const store = heap[fromIndex];
    heap[fromIndex] = heap[toIndex];
    heap[toIndex] = store;
  };
  const addElement = function (element) {
    heap.push(element);
    if (heap.length > 1) {
      let lastIndex = heap.length - 1;
      let parentIndex = Math.floor((lastIndex - 1) / 2);
      while (heap[parentIndex] < heap[lastIndex]) {
        swapElements(parentIndex, lastIndex);
        lastIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      }
    }
  };
  const removeElement = function () {
    const last = heap.pop();
    heap = [last, ...heap.slice(1)];
    if (heap.length > 1) {
      let parentIndex = 0;
      let leftChildIndex = parentIndex * 2 + 1;
      let rightChildIndex = parentIndex * 2 + 1 + 1;
      while (
        (heap[leftChildIndex] || heap[leftChildIndex] === 0) &&
        (heap[rightChildIndex] || heap[rightChildIndex] === 0)
      ) {
        const findLargestIndex =
          heap[leftChildIndex] > heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
        if (this.heap[findLargestIndex] < this.heap[indexOfToBeRemovedElement]) {
          this.swapElements(indexOfToBeRemovedElement, findLargestIndex);
          indexOfToBeRemovedElement = findLargestIndex;
        }
        swapElements(findLargestIndex, parentIndex);
        parentIndex = findLargestIndex;
        rightChildIndex = findLargestIndex * 2 + 1 + 1;
        leftChildIndex = findLargestIndex * 2 + 1;
      }
    }
    return heap;
  };
  for (const iterator of nums) {
    addElement(iterator);
  }

  while (--k) {
    removeElement();
  }
  return heap[0];
};

console.log(findKthLargest((nums = [5, 2, 4, 1, 3, 6, 0]), 5));
console.log(findKthLargest((nums = [7, 6, 5, 4, 3, 2, 1]), 5));
console.log(findKthLargest((nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]), (k = 4)));
console.log(findKthLargest((nums = [3, 2, 1, 5, 6, 4]), (k = 2)));
