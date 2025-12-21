const BinaryTree = require('../javascript/binary-tree.js');

var isValidBST1 = function (root) {
    if (root === null) return true;

    const stack = [];
    let pre = null;

    while (root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();

        if (pre !== null && root.val <= pre.val) {
            return false;
        }

        pre = root;
        root = root.right;
    }

    return true;
};

var isValidBST = function (root) {
    let last = null;
    let out = true;
    function isValidBSTHelper(root) {
        if (out == false) {
            return;
        }
        if (!root) {
            return null;
        }
        isValidBSTHelper(root.left);
        if (last != null && last.val >= root.val) {
            out = false;
        }
        last = root;
        isValidBSTHelper(root.right);
    }
    isValidBSTHelper(root);
    return out;
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
for (const iterator of [5, 6, 4]) {
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
for (const iterator of [2, 1, 3]) {
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
