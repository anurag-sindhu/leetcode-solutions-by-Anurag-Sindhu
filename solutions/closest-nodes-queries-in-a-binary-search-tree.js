const BinarySearchTree = require('../../js/binary-search-tree.js')

var inOrderTraversal = function (root, arr = []) {
  if (!root) {
    return
  }
  inOrderTraversal(root.left, arr)
  if (root.val) {
    arr.push(root.val)
  }
  inOrderTraversal(root.right, arr)
  return arr
}

var closestNodes = function (root, queries) {
  const output = {}
  const sortedTreeElements = inOrderTraversal(root)
  let sortedTreeElementsIndex = 0
  let sortedQueriesIndex = 0

  const bucketSort = (function () {
    const maxNumber = Math.max(...queries)
    const arr = new Array(maxNumber)
    for (let index = 0; index < queries.length; index++) {
      if (arr[queries[index]] === undefined) {
        arr[queries[index]] = 0
      }
      arr[queries[index]] += 1
      console.log(arr[queries[index]])
    }
    let sortedArray = []
    for (let index = 0; index < arr.length; index++) {
      for (let indexTemp = 0; indexTemp < arr[index]; indexTemp++) {
        sortedArray.push(index)
      }
    }
    return sortedArray
  })()
  let lastElementOfSortedArray = -1
  while (bucketSort[sortedQueriesIndex] !== undefined) {
    const sortedQueriesElement = bucketSort[sortedQueriesIndex]
    const sortedTreeElement = sortedTreeElements[sortedTreeElementsIndex]

    if (sortedTreeElement === undefined) {
      output[bucketSort[sortedQueriesIndex++]] = [
        lastElementOfSortedArray,
        -1,
      ]
      continue
    }
    if (output[bucketSort[sortedQueriesIndex]] === undefined) {
      output[bucketSort[sortedQueriesIndex]] = [lastElementOfSortedArray, -1]
    }
    if (sortedQueriesElement === sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]] = [
        sortedTreeElement,
        sortedTreeElement,
      ]
      sortedQueriesIndex++
    } else if (sortedQueriesElement < sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]][1] = sortedTreeElement
      sortedQueriesIndex++
    } else if (sortedQueriesElement > sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]][0] = sortedTreeElement
      lastElementOfSortedArray = sortedTreeElement
      sortedTreeElementsIndex++
    }
  }
  const finalOutput = []
  for (const iterator of queries) {
    finalOutput.push(output[iterator])
  }
  return finalOutput
}

let binarySearchTree
let resp

binarySearchTree = new BinarySearchTree()
for (const iterator of [
  19,
  3,
  20,
  2,
  10,
  null,
  null,
  1,
  null,
  5,
  15,
  null,
  null,
  4,
  6,
]) {
  binarySearchTree.add(iterator)
}
resp = closestNodes(binarySearchTree.tree, [
  143265,
  20,
  19,
  172253,
  562096,
  330190,
  474166,
  460360,
  929962,
  2,
])
console.log(resp)
binarySearchTree = new BinarySearchTree()
for (const iterator of [
  16,
  8,
  18,
  1,
  12,
  null,
  20,
  null,
  2,
  9,
  null,
  null,
  null,
  null,
  7,
]) {
  binarySearchTree.add(iterator)
}
resp = closestNodes(binarySearchTree.tree, [8, 14, 285508, 6])
console.log(resp)

binarySearchTree = new BinarySearchTree()
for (const iterator of [16, 14, null, 4, 15, 1]) {
  binarySearchTree.add(iterator)
}
resp = closestNodes(binarySearchTree.tree, [10, 6, 2, 9])
console.log(resp)

binarySearchTree = new BinarySearchTree()
for (const iterator of [
  6,
  2,
  13,
  1,
  4,
  9,
  15,
  null,
  null,
  null,
  null,
  null,
  null,
  14,
]) {
  binarySearchTree.add(iterator)
}
resp = closestNodes(binarySearchTree.tree, [2, 5, 16])
console.log(resp)

binarySearchTree = new BinarySearchTree()
for (const iterator of [4, null, 9]) {
  binarySearchTree.add(iterator)
}
resp = closestNodes(binarySearchTree.tree, [3])
console.log(resp)
