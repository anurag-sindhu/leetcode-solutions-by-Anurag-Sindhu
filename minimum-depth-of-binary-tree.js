const BinaryTree = require('../../js/binary-tree.js');
class Binary {
    findCompletedLevels(tree) {
        if (!tree) {
            return 0;
        }
        if (tree.val === null) {
            return tree.val;
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
    let getLeftLevels = new Binary().findCompletedLevels(root.left) || Infinity;
    let getRightLevels =
        new Binary().findCompletedLevels(root.right) || Infinity;
    if (getLeftLevels === Infinity && getRightLevels === Infinity) {
        return 1;
    }
    console.log({ getLeftLevels, getRightLevels });
    return Math.min(getLeftLevels, getRightLevels) + 1;
};

let binaryTree;
binaryTree = new BinaryTree();
for (const iterator of [-9, -3, 2, null, 4, 4, 0, -6, null, -5]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree) === 3);

binaryTree = new BinaryTree();
for (const iterator of [2, null, 3, null, 4, null, 5, null, 6]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree) === 5);

binaryTree = new BinaryTree();
for (const iterator of [0]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree) === 1);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree) === 0);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 3, null, null, 4, 4]) {
    binaryTree.add(iterator);
}
console.log(minDepth(binaryTree.tree) === 2);
binaryTree = new BinaryTree();

for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}

console.log(minDepth(binaryTree.tree) === 2);
