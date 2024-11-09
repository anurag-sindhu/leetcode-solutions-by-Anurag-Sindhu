const BinarySearchTree = require('../../js/binary-search-tree.js');

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }
  printPQueue() {
    var arr = [];
    for (var i = 0; i < this.items.length; i++) arr.push(this.items[i].element);
    return arr;
  }
}

var getMinimumDifference = function (root) {
  const priorityQueue = new PriorityQueue();
  function traverse(root, priorityQueue) {
    if (!root) {
      return null;
    }
    if (root.val || root.val === 0) {
      priorityQueue.enqueue(root.val, root.val);
    }
    traverse(root.left, priorityQueue);
    traverse(root.right, priorityQueue);
  }
  traverse(root, priorityQueue);
  const arr = priorityQueue.printPQueue();

  let min = Infinity;
  for (let index = 0; index < arr.length - 1; index++) {
    let absoluteDifference = Math.abs(arr[index] - arr[index + 1]);
    if (min > absoluteDifference) {
      min = absoluteDifference;
    }
  }
  return min;
};

let binarySearchTree;
let res;

binarySearchTree = new BinarySearchTree();
for (const iterator of [236, 104, 701, null, 227, null, 911]) {
  binarySearchTree.add(iterator);
}
res = getMinimumDifference(binarySearchTree.tree);
console.log(res);
binarySearchTree = new BinarySearchTree();
for (const iterator of [1, null, 2]) {
  binarySearchTree.add(iterator);
}
res = getMinimumDifference(binarySearchTree.tree);
console.log(res);

binarySearchTree = new BinarySearchTree();
for (const iterator of [1, 0, 48, null, null, 12, 49]) {
  binarySearchTree.add(iterator);
}
res = getMinimumDifference(binarySearchTree.tree);
console.log(res);

binarySearchTree = new BinarySearchTree();
for (const iterator of [4, 2, 6, 1, 3]) {
  binarySearchTree.add(iterator);
}
res = getMinimumDifference(binarySearchTree.tree);
console.log(res);
