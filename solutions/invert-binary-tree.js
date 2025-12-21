const BinaryTree = require('../javascript/binary-tree.js');
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    const leftSide = invertTree(root.right);
    const rightSide = invertTree(root.left);
    root.left = leftSide;
    root.right = rightSide;
    return root;
};

let res;
let binaryTree = new BinaryTree();
for (const iterator of [2, 1, 3]) {
    binaryTree.add(iterator);
}
res = invertTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 7, 1, 3, 6, 9]) {
    binaryTree.add(iterator);
}
res = invertTree(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [2, 1, 3]) {
    binaryTree.add(iterator);
}
console.log(invertTree(binaryTree.tree));
