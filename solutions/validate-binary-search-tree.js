const BinaryTree = require('../javascript/binary-tree.js');

var startCheck = function (root, parent = null, from = null, till = null) {
    if (root === null) {
        return;
    }
    startCheck(root.left);
    startCheck(root.right);
    const rootVal = root.val;
    const leftVal = root.left && root.left.val;
    const rightVal = root.right && root.right.val;
    if (leftVal !== null) {
        if (leftVal > rootVal) {
            throw false;
        }
    }
    if (rightVal !== null) {
        if (rightVal < rootVal) {
            throw false;
        }
    }
    return true;
};
var isValidBST = function (root) {
    try {
        const resp = startCheck(root);
        return resp;
    } catch (e) {
        return false;
    }
};

let resp = null;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of [2, 1, 3]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [5, 1, 4, null, null, 3, 6]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 6, null, null, 3, 7]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);
