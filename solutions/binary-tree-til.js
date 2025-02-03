const BinaryTree = require('../javascript/binary-tree.js');

var findTilt = function (root) {
    let sum = 0;
    function findTiltHelper(root) {
        if (!root) {
            return 0;
        }
        const leftSum = findTiltHelper(root.left);
        const rightSum = findTiltHelper(root.right);
        const store = root.val;
        sum += Math.abs(leftSum - rightSum);
        return store + leftSum + rightSum;
    }
    findTiltHelper(root);
    return sum;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
res = findTilt(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 9, 3, 5, null, 7]) {
    binaryTree.add(iterator);
}
res = findTilt(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [21, 7, 14, 1, 1, 2, 2, 3, 3]) {
    binaryTree.add(iterator);
}
res = findTilt(binaryTree.tree);
console.log(res);
