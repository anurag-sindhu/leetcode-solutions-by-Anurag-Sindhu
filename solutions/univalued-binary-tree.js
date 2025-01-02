const BinaryTree = require('../javascript/binary-tree.js');

var isUnivalTree = function (root, uniqueValue = null) {
    if (!root || root.val === null) {
        return true;
    }
    if (uniqueValue === null) {
        uniqueValue = root.val;
    } else {
        if (uniqueValue !== root.val) {
            return false;
        }
    }
    let res;
    res = isUnivalTree(root.left, uniqueValue);
    if (res === false) {
        return false;
    }
    res = isUnivalTree(root.right, uniqueValue);
    if (res === false) {
        return false;
    }
    return true;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 1, 1, 1, 1, null, 1]) {
    binaryTree.add(iterator);
}
res = isUnivalTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [2, 2, 2, 5, 2]) {
    binaryTree.add(iterator);
}
res = isUnivalTree(binaryTree.tree);
console.log(res);
