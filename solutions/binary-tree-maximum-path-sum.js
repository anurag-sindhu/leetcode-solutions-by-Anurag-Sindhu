const BinaryTree = require('../javascript/binary-tree.js');

var maxPathSum = function (root) {
    let max = -Infinity;
    function maxPathSumHelper(root) {
        if (!root || root.val === null) {
            return -Infinity;
        }
        const leftSum = maxPathSumHelper(root.left);
        const rightSum = maxPathSumHelper(root.right);
        const partOfPathSum = root.val + Math.max(leftSum, rightSum);
        const closedPathSum = leftSum + rightSum + root.val;
        max = Math.max(max, rightSum, leftSum, root.val, closedPathSum, partOfPathSum);
        //Either Include the root or any path(Root and right or left)
        return Math.max(partOfPathSum, root.val);
    }
    maxPathSumHelper(root);
    return max;
};

let binaryTree;
let pathSum;

binaryTree = new BinaryTree();
for (const iterator of [1, -2, -3, 1, 3, -2, null, -1]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 3);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, -5, -6, -7]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 10);

binaryTree = new BinaryTree();
for (const iterator of [-2, -1]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === -1);

binaryTree = new BinaryTree();
for (const iterator of [1, -2, 3]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 4);

binaryTree = new BinaryTree();
for (const iterator of [2, -1]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 2);

binaryTree = new BinaryTree();
for (const iterator of [-3]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === -3);

binaryTree = new BinaryTree();
for (const iterator of [-10, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 42);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
pathSum = maxPathSum(binaryTree.tree);
console.log(pathSum === 6);
