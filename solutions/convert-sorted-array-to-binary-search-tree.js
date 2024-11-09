class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  addNode(data, tree) {
    if (tree.val > data) {
      if (!tree.left) {
        tree.left = new Node(data);
      } else {
        this.addNode(data, tree.left);
      }
    } else {
      if (!tree.right) {
        tree.right = new Node(data);
      } else {
        this.addNode(data, tree.right);
      }
    }
  }
  add(data) {
    const node = new Node(data);
    if (!this.tree) {
      this.tree = node;
    } else {
      this.addNode(data, this.tree);
    }
  }
}

var middle = function (nums) {
  const half = Math.floor(nums.length / 2);
  return { leftArray: nums.slice(0, half), root: nums[half], rightArray: nums.slice(half + 1) };
};
var sortedArrayToBST = function (nums) {
  const { leftArray, root, rightArray } = middle(nums);
  const tree = new BinarySearchTree();
  tree.add(root);
  if (leftArray.length <= 3) {
    const leftTree = new BinarySearchTree();
    if (leftArray.length === 3) {
      leftTree.add(leftArray[1]);
      leftTree.add(leftArray[0]);
      leftTree.add(leftArray[1]);
    } else if (leftArray.length === 2) {
      leftTree.add(leftArray[1]);
      leftTree.add(leftArray[0]);
    } else {
      leftTree.add(leftArray[0]);
    }
    tree.tree.left = leftTree.tree;
  } else {
    tree.right = sortedArrayToBST(leftArray);
  }

  if (rightArray.length <= 3) {
    const rightTree = new BinarySearchTree();
    if (rightArray.length === 3) {
      rightTree.add(leftArray[1]);
      rightTree.add(leftArray[0]);
      rightTree.add(leftArray[1]);
    } else if (rightArray.length === 2) {
      rightTree.add(leftArray[0]);
      rightTree.add(leftArray[1]);
    } else {
      rightTree.add(leftArray[0]);
    }
    tree.tree.right = rightTree.tree;
  } else {
    tree.right = sortedArrayToBST(rightArray);
  }
  return tree.tree;
};

let resp = null;

resp = sortedArrayToBST([0, 1, 2, 3, 4, 5]);
console.log(resp);

resp = sortedArrayToBST([-1, 0, 1, 2]);
console.log(resp);
resp = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(resp);
//[0,-3,9,-10,null,5]
resp = sortedArrayToBST([1, 2, 3]);
console.log(resp);
resp = sortedArrayToBST([1, 2, 3, 4]);
console.log(resp);
resp = sortedArrayToBST([0, 1, 2, 3, 4, 5]);
console.log(resp);
// [3, 1, 5, 0, 2, 4];
resp = sortedArrayToBST([1, 3]);
console.log(resp);
//[3,1]
