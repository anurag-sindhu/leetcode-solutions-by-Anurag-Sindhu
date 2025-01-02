const BinaryTree = require('../javascript/binary-tree.js');

var trimBST = function (root, low, high) {
    if (!root) {
        return null;
    }
    if (root.val < low) {
        return trimBST(root.right, low, high);
    }
    if (root.val > high) {
        return trimBST(root.left, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};

let binaryTree;
let resp;

binaryTree = new BinaryTree();
for (const iterator of [3, 1, 4, null, 2]) {
    binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree, 3, 4);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 0, 4, null, 2, null, null, 1]) {
    binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree, 1, 3);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [1, 0, 2]) {
    binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree, (low = 1), (high = 2));
console.log(resp);
binaryTree = new BinaryTree();
for (const iterator of [1000, 500, 2000, 250, 750, 1500, 2500, 125, 425, 600, 800]) {
    binaryTree.add(iterator);
}
resp = trimBST(binaryTree.tree, 300, 1700);
console.log(resp);
