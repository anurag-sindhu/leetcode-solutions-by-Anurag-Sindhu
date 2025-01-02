const BinaryTree = require('../javascript/binary-tree.js');

var startCheck = function (root, parent = null, from = null, till = null) {
    if (!root) {
        return null;
    }
    if (root.left && root.left.val) {
        if (from !== null) {
            if (from > root.left.val) {
                throw false;
            }
        }
        if (!(root.val > root.left.val)) {
            throw false;
        }
    }

    if (root.right && root.right.val) {
        if (till !== null) {
            if (till < root.right.val) {
                throw false;
            }
        }
        if (!(root.val < root.right.val)) {
            throw false;
        }
    }

    startCheck(root.left, (parent = root.val), (from = null), (till = root.val));
    startCheck(root.right, (parent = root.val), (from = root.val), (till = null));
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
for (const iterator of [120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);

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
for (const iterator of [5, 4, 6, null, null, 3, 7]) {
    binaryTree.add(iterator);
}
resp = isValidBST(binaryTree.tree);
console.log(resp);
