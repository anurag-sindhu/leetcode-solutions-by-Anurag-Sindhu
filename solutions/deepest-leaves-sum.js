const BinaryTree = require('../javascript/binary-tree.js');

var getDeepestLevel = function (root, level = 0) {
    if (!root) {
        return level;
    }
    return Math.max(getDeepestLevel(root.left, level + 1), getDeepestLevel(root.right, level + 1));
};

var deepestLeavesSum = function (root) {
    const deepestLevel = getDeepestLevel(root);
    let sum = 0;
    var deepestLeavesSumHelper = function (root, level = 0) {
        if (!root) {
            return;
        }
        const currentValue = root.val;
        if (level === deepestLevel - 1 && currentValue) {
            sum += currentValue;
        }

        deepestLeavesSumHelper(root.left, level + 1);
        deepestLeavesSumHelper(root.right, level + 1);
    };
    deepestLeavesSumHelper(root);
    return sum;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]) {
    binaryTree.add(iterator);
}
res = deepestLeavesSum(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]) {
    binaryTree.add(iterator);
}
res = deepestLeavesSum(binaryTree.tree);
console.log(res);
