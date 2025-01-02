const BinaryTree = require('../javascript/binary-tree.js');

var findTarget = function (root, k, encounteredElements = {}) {
    if (!root) {
        return false;
    }
    if (encounteredElements[k - root.val] !== undefined) {
        return true;
    } else {
        if (root.val !== null) {
            encounteredElements[root.val] = root.val;
        }
    }
    let isFound = findTarget(root.left, k, encounteredElements);
    if (isFound) {
        return true;
    }
    isFound = findTarget(root.right, k, encounteredElements);
    if (isFound) {
        return true;
    }
    return false;
};
let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [5, 3, 6, 2, 4, null, 7]) {
    binaryTree.add(iterator);
}
res = findTarget(binaryTree.tree, 9);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [5, 3, 6, 2, 4, null, 7]) {
    binaryTree.add(iterator);
}
res = findTarget(binaryTree.tree, 28);
console.log(res);
