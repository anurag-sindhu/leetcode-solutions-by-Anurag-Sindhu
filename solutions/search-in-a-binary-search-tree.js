const BinaryTree = require('../javascript/binary-tree.js');

var searchBST = function (root, val) {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
let res;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 7, 1, 3]) {
    binaryTree.add(iterator);
}
res = searchBST(binaryTree.tree, (val = 2));
console.log({ res });
