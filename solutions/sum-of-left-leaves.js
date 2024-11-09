const BinaryTree = require('../../js/binary-tree.js');

var sumOfLeftLeaves = function(root) {
    let sum = 0;
    var sumOfLeftLeavesHelper = function(root, side = null) {
        if (!root) {
            return;
        }
        if (
            side === 'left' &&
            (!root.left || root.left.val === null) &&
            (!root.right || root.right.val === null)
        ) {
            sum += root.val;
        }
        sumOfLeftLeavesHelper(root.left, 'left');
        sumOfLeftLeavesHelper(root.right, 'right');
    };
    sumOfLeftLeavesHelper(root);
    return sum;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [ 3, 4, 5, -7, -6, null, null, -7, null, -5, null, null, null, -4 ]) {
    binaryTree.add(iterator);
}
res = sumOfLeftLeaves(binaryTree.tree);
console.log(res === -11);

binaryTree = new BinaryTree();
for (const iterator of [ 3, 9, 20, null, null, 15, 7 ]) {
    binaryTree.add(iterator);
}
res = sumOfLeftLeaves(binaryTree.tree);
console.log(res === 24);

binaryTree = new BinaryTree();
for (const iterator of [ -8, -6, 7, 6, null, null, null, null, 5 ]) {
    binaryTree.add(iterator);
}
res = sumOfLeftLeaves(binaryTree.tree);
console.log(res === 0);

binaryTree = new BinaryTree();
for (const iterator of [ 1 ]) {
    binaryTree.add(iterator);
}
res = sumOfLeftLeaves(binaryTree.tree);
console.log(res === 0);
