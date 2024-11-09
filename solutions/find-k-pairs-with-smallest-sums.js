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

var kSmallestPairs = function (nums1, nums2, k) {
  const output = []
  const startIndexConfig = []
  const matrixSum = []
  const minHeap = new Heap()
  for (let num1Index = 0; num1Index < nums1.length; num1Index++) {
    matrixSum[num1Index] = []
    startIndexConfig[num1Index] = 0
    for (let num2Index = 0; num2Index < nums2.length; num2Index++) {
      matrixSum[num1Index][num2Index] = nums1[num1Index] + nums2[num2Index]
      minHeap.insertMinHeap(matrixSum[num1Index][num2Index], [
        nums1[num1Index],
        nums2[num2Index],
      ])
    }
  }
  while (k-- && minHeap.heap[0]) {
    output.push(minHeap.heap[0].index)
    minHeap.extractMinimumElement()
  }
  return output
}

console.log(kSmallestPairs((nums1 = [1, 7, 11]), (nums2 = [2, 4, 6]), (k = 3)))
console.log(kSmallestPairs((nums1 = [1, 1, 2]), (nums2 = [1, 2, 3]), (k = 2)))
console.log(kSmallestPairs((nums1 = [1, 2]), (nums2 = [3]), (k = 3)))
