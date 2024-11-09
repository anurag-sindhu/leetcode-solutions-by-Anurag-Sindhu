const BinaryTree = require('../../js/binary-tree.js');

var diameterOfBinaryTree = function (root) {
  let max = 0;
  var maxDepth = function (root) {
    if (!root) {
      return 0;
    }
    const leftPathSum = maxDepth(root.left);
    const rightPathSum = maxDepth(root.right);
    max = Math.max(max, leftPathSum + rightPathSum);
    return 1 + Math.max(leftPathSum, rightPathSum);
  };

  maxDepth(root);
  return max;
};

let binaryTree;
let first;

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3, 5, 8, 7, 6, 6, 7, 8, 5]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, null, 3, null, 3]) {
  binaryTree.add(iterator);
}
first = diameterOfBinaryTree(binaryTree.tree);
console.log({ first });
