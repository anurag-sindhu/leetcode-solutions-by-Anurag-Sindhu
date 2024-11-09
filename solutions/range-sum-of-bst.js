const BinaryTree = require('../../js/binary-tree.js');

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  function traverseNodes(root) {
    if (!root) {
      return null;
    }
    if (low <= root.val && high >= root.val) {
      sum += root.val;
    }
    traverseNodes(root.left);
    traverseNodes(root.right);
  }
  traverseNodes(root);
  return sum;
};

let binaryTree;
binaryTree = new BinaryTree();
for (const iterator of [10, 5, 15, 3, 7, null, 18]) {
  binaryTree.add(iterator);
}
console.log(rangeSumBST(binaryTree.tree, (low = 7), (high = 15)));

binaryTree = new BinaryTree();
for (const iterator of [10, 5, 15, 3, 7, 13, 18, 1, null, 6]) {
  binaryTree.add(iterator);
}
console.log(rangeSumBST(binaryTree.tree, (low = 6), (high = 10)));
