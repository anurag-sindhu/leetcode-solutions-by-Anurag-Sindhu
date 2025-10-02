const BinaryTree = require('../javascript/binary-tree.js');

var removeLeafNodes1 = function (root, target) {
    function iterateTree(root) {
        if (!root) {
            return root;
        }
        const leftTree = root.left;
        const rightTree = root.right;
        if (leftTree && leftTree.val == target && leftTree.left == null && leftTree.right == null) {
            root.left = null;
        }
        if (
            rightTree &&
            rightTree.val == target &&
            rightTree.left == null &&
            rightTree.right == null
        ) {
            root.right = null;
        }
        iterateTree(root.left);
        if (leftTree && leftTree.val == target && leftTree.left == null && leftTree.right == null) {
            root.left = null;
        }
        iterateTree(root.right);
        if (
            rightTree &&
            rightTree.val == target &&
            rightTree.left == null &&
            rightTree.right == null
        ) {
            root.right = null;
        }
    }
    iterateTree(root);
    if (root.val == target && root.left == null && root.right == null) {
        return null;
    }
    return root;
};

var removeLeafNodes = function (root, target) {
    function iterateTree(root) {
        if (!root) {
            return root;
        }
        root.left = iterateTree(root.left);
        root.right = iterateTree(root.right);
        if (root.right) {
            if (root.right.val == target) {
                root.right = null;
            }
        }
        if (root.left) {
            if (root.left.val == target) {
                root.left = null;
            }
        }
        return root;
    }
    iterateTree(root);
    if (root.left == null && root.right == null) {
        if (root.val == target) {
            root = null;
        }
    }
    return root;
};

let res;
res = removeLeafNodes(new BinaryTree().createFromArray([1, 3, 3, 3, 2]), 3);
console.log(res);
res = removeLeafNodes(new BinaryTree().createFromArray([1, 1, 1]), 1);
console.log(res);
res = removeLeafNodes(new BinaryTree().createFromArray([1, 2, 3]), 1);
console.log(res);
res = removeLeafNodes(new BinaryTree().createFromArray([1, 2, null, 2, null, 2]), 2);
console.log(res);
res = removeLeafNodes(new BinaryTree().createFromArray([1, 2, 3, 2, null, 2, 4]), 2);
console.log(res);
