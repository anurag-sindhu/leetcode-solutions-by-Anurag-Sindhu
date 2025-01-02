const BinaryTree = require('../javascript/binary-tree.js');
//2=OR
//3=AND
var start = function (root) {
    if (root !== null && root.val !== null) {
        if (root.val === 1 || root.val === 0) {
            return root.val;
        }
        const leftResp = evaluateTree(root.left);
        const rightResp = evaluateTree(root.right);
        return root.val === 3 ? leftResp && rightResp : leftResp || rightResp;
    }
};

function evaluateTree(tree) {
    return Boolean(start(tree));
}
let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of [0]) {
    binaryTree.add(iterator);
}
res = evaluateTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [2, 1, 3, null, null, 0, 1]) {
    binaryTree.add(iterator);
}
res = evaluateTree(binaryTree.tree);
console.log(res);
