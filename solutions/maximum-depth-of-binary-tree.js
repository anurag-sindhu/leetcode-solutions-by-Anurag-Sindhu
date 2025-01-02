const BinaryTree = require('../javascript/binary-tree.js');

var maxDepth = function (root, pathSum = 0) {
    if (!root) {
        return pathSum;
    }
    const leftPathSum = maxDepth(root.left, pathSum + 1);
    const rightPathSum = maxDepth(root.right, pathSum + 1);
    return Math.max(leftPathSum, rightPathSum);
};

let binaryTree = new BinaryTree();
for (const iterator of [1, null, 2]) {
    binaryTree.add(iterator);
}
let first = maxDepth(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
first = maxDepth(binaryTree.tree);
console.log({ first });
