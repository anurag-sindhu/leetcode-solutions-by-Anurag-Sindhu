const BinaryTree = require('../javascript/binary-tree.js');

var findSecondMinimumValue = function (root) {
    let firstLowest = null,
        secondLowest = null;
    var findSecondMinimumValueHelper = function (root) {
        if (!root || root.val === null) {
            return;
        }
        const value = root.val;
        if (firstLowest === null || firstLowest > value) {
            if (firstLowest === null) {
                firstLowest = value;
            } else {
                if (secondLowest > firstLowest) {
                    secondLowest = firstLowest;
                }
                firstLowest = value;
            }
        } else {
            if ((secondLowest === null || secondLowest > value) && value !== firstLowest) {
                secondLowest = value;
            }
        }
        findSecondMinimumValueHelper(root.left);
        findSecondMinimumValueHelper(root.right);
    };
    const res = findSecondMinimumValueHelper(root);
    if (secondLowest === null) {
        return -1;
    }
    return secondLowest;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [2, 2, 5, null, null, 5, 7]) {
    binaryTree.add(iterator);
}
res = findSecondMinimumValue(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [2, 2, 2]) {
    binaryTree.add(iterator);
}
res = findSecondMinimumValue(binaryTree.tree);
console.log(res);
