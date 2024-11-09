const BinaryTree = require('../../js/binary-tree.js');

var isSameTree = function (leftTree, rightTree) {
  if (!leftTree && !rightTree) {
    return true;
  }
  if (leftTree == null || rightTree === null) {
    return false;
  }
  if (leftTree.val !== rightTree.val) {
    return false;
  }
  return isSameTree(leftTree.left, rightTree.left) && isSameTree(leftTree.right, rightTree.right);
};
let binaryTree1 = new BinaryTree();
let binaryTree2 = new BinaryTree();
for (const iterator of [1, 2,1]) {
  binaryTree1.add(iterator);
}
for (const iterator of [1, 1, 2]) {
  binaryTree2.add(iterator);
}
let first = isSameTree(binaryTree1.tree, binaryTree2.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3]) {
  binaryTree.add(iterator);
}
first = isSameTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3, 5, 8, 7, 6, 6, 7, 8, 5]) {
  binaryTree.add(iterator);
}
first = isSameTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, null, 3, null, 3]) {
  binaryTree.add(iterator);
}
first = isSameTree(binaryTree.tree);
console.log({ first });
