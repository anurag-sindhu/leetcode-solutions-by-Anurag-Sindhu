const BinaryTree = require('../javascript/binary-tree.js');

var findDuplicateSubtrees = function (root) {
    const ssss = {};
    function findDuplicateSubtreesHelper(root, ss = '') {
        if (!root) {
            return;
        }
        if (root.val !== null) {
            ss += root.val;
            console.log(ss);
        }
        findDuplicateSubtreesHelper(root.left, ss);
        findDuplicateSubtreesHelper(root.right, ss);

        if (root.val !== null) {
            console.log({ 'root.val': root.val });
        }
    }
    findDuplicateSubtreesHelper(root);
    return;
};

let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of (root = [2, 2, 2, 3, null, 3, null])) {
    binaryTree.add(iterator);
}
console.log(findDuplicateSubtrees(binaryTree.tree));

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, null, 2, 4, null, null, 5]) {
    binaryTree.add(iterator);
}
console.log(findDuplicateSubtrees(binaryTree.tree));
