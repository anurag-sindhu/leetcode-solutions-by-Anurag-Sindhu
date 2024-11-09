class Heap {
  constructor() {
    this.heap = []
  }
  swapElements(from, to) {
    const save = this.heap[to]
    this.heap[to] = this.heap[from]
    this.heap[from] = save
    return
  }
  findParentIndex(childIndex) {
    const indexFind = (childIndex - 1) / 2
    if (indexFind !== parseInt(indexFind)) {
      return (childIndex - 2) / 2
    }
    return indexFind
  }
  findChildIndex(parentIndex) {
    return { leftChild: 2 * parentIndex + 1, rightChild: 2 * parentIndex + 2 }
  }
  insertMinHeap(element, index) {
    this.heap.push({ value: element, index })
    const length = this.heap.length
    if (length > 1) {
      let currentIndex = length - 1
      while (currentIndex) {
        const findParentIndex = this.findParentIndex(currentIndex)
        if (this.heap[findParentIndex].value > this.heap[currentIndex].value) {
          this.swapElements(currentIndex, findParentIndex)
        }
        currentIndex = findParentIndex
      }
    }
  }
  getMinimumElement() {
    return this.heap[0]
  }
  getMaximumElement() {
    return this.heap[0]
  }
  extractMinimumElement() {
    const length = this.heap.length
    let indexOfToBeRemovedElement = 0
    this.heap[indexOfToBeRemovedElement] = this.heap[length - 1]
    this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1)
    while (indexOfToBeRemovedElement < length) {
      let { leftChild, rightChild } = this.findChildIndex(
        indexOfToBeRemovedElement,
      )
      let findIndexOfSmallChildElement = leftChild
      if (this.heap[rightChild]) {
        findIndexOfSmallChildElement =
          this.heap[leftChild].value > this.heap[rightChild].value
            ? rightChild
            : leftChild
      }
      if (
        this.heap[findIndexOfSmallChildElement] &&
        this.heap[indexOfToBeRemovedElement] &&
        this.heap[findIndexOfSmallChildElement].value <
          this.heap[indexOfToBeRemovedElement].value
      ) {
        this.swapElements(
          indexOfToBeRemovedElement,
          findIndexOfSmallChildElement,
        )
        indexOfToBeRemovedElement = findIndexOfSmallChildElement
      } else {
        return
      }
    }
  }
  extractMaximumElement() {
    const length = this.heap.length
    let indexOfToBeRemovedElement = 0
    this.heap[indexOfToBeRemovedElement] = this.heap[length - 1]
    this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1)
    while (indexOfToBeRemovedElement < length) {
      let { leftChild, rightChild } = this.findChildIndex(
        indexOfToBeRemovedElement,
      )
      const findLargestIndex =
        this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild
      if (this.heap[findLargestIndex] > this.heap[indexOfToBeRemovedElement]) {
        this.swapElements(indexOfToBeRemovedElement, findLargestIndex)
        indexOfToBeRemovedElement = findLargestIndex
      } else {
        return
      }
    }
  }
  getHeap() {
    return this.heap
  }
}

var kthSmallest = function (matrix, k) {
  const indexConfig = new Array(matrix.length).fill(0)
  const heap = new Heap()
  for (let index = 0; index < indexConfig.length; index++) {
    heap.insertMinHeap(matrix[index][indexConfig[index]], [
      index,
      indexConfig[index],
    ])
  }
  while (--k) {
    const lastElement = heap.heap[0]
    heap.extractMinimumElement()
    if (
      matrix[lastElement.index[0]] &&
      matrix[lastElement.index[0]][lastElement.index[1] + 1] !== undefined
    ) {
      heap.insertMinHeap(
        matrix[lastElement.index[0]][lastElement.index[1] + 1],
        [lastElement.index[0], lastElement.index[1] + 1],
      )
    }
  }
  return heap.heap[0].value
}

console.log(kthSmallest((matrix = [[-5]]), (k = 1)))
console.log(
  kthSmallest(
    (matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]),
    (k = 8),
  ),
)
