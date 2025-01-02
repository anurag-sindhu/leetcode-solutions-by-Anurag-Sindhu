const BinaryTree = require('../javascript/binary-tree.js');

var sumEvenGrandparent = function (root) {
    let sum = 0;
    var sumEvenGrandparentHelper = function (root, parent = null, grandParent = null) {
        if (!root) {
            return;
        }
        const currentValue = root.val;
        if (grandParent !== null && grandParent % 2 === 0 && currentValue != null) {
            sum += currentValue;
        }
        sumEvenGrandparentHelper(root.left, currentValue, parent);
        sumEvenGrandparentHelper(root.right, currentValue, parent);
    };
    sumEvenGrandparentHelper(root);
    return sum;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]) {
    binaryTree.add(iterator);
}
res = sumEvenGrandparent(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
res = sumEvenGrandparent(binaryTree.tree);
console.log(res);
