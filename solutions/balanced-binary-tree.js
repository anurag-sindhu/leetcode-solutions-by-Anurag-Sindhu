const BinaryTree = require('../javascript/binary-tree.js');
class Binary {
    findCompletedLevels(tree) {
        if (!tree) {
            return 0;
        }
        if (tree.val === null) {
            return 0;
        }
        const leftLevel = 1 + this.findCompletedLevels(tree.left);
        const rightLevel = 1 + this.findCompletedLevels(tree.right);
        return Math.max(leftLevel, rightLevel);
    }
}
var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    const getLeftLevels = new Binary().findCompletedLevels(root.left);
    const getRightLevels = new Binary().findCompletedLevels(root.right);
    return Math.abs(getLeftLevels - getRightLevels) <= 1;
};

let binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree));
binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree));

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 3, null, null, 4, 4]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree));
binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}

console.log(minDepth(binaryTree.tree));
console.log('object');
