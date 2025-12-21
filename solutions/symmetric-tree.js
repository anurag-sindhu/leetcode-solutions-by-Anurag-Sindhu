const BinaryTree = require('../javascript/binary-tree.js');

var isSymmetric = function (root) {
    var isLeftRightSymmetric = function (leftTree, rightTree) {
        if (!leftTree && !rightTree) {
            return true;
        }
        if (leftTree == null || rightTree === null) {
            return false;
        }
        if (leftTree.val !== rightTree.val) {
            return false;
        }
        return (
            isLeftRightSymmetric(leftTree.left, rightTree.right) &&
            isLeftRightSymmetric(leftTree.right, rightTree.left)
        );
    };

    if (!root) {
        return true;
    }
    return isLeftRightSymmetric(root.left, root.right);
};

let binaryTree;



binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3, 5, 8, 7, 6, 6, 7, 8, 5]) {
    binaryTree.add(iterator);
}
first = isSymmetric(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3]) {
    binaryTree.add(iterator);
}
first = isSymmetric(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, null, 3, null, 3]) {
    binaryTree.add(iterator);
}
first = isSymmetric(binaryTree.tree);
console.log({ first });
