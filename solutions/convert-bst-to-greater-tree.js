const BinaryTree = require('../javascript/binary-tree.js');

var convertBST = function (root) {
    let sum = 0;
    function convertBSTHelper(root) {
        if (!root) {
            return 0;
        }
        convertBSTHelper(root.right);
        sum += root.val;
        root.val = sum;
        convertBSTHelper(root.left);
    }
    convertBSTHelper(root);
    return;
};

let binaryTree;
let resp;

binaryTree = new BinaryTree();
for (const iterator of [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]) {
    binaryTree.add(iterator);
}
resp = convertBST(binaryTree.tree);
console.log(resp);
