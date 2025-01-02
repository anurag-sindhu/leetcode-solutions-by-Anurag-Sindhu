const BinaryTree = require('../javascript/binary-tree.js');

var sumNumbers = function (root) {
    let sum = 0;
    function helper(root, path = '') {
        if (!root) {
            return 0;
        }
        if (root.left === null && root.right === null) {
            sum += Number(`${path}${root.val}`);
            return;
        }
        helper(root.left, `${path}${root.val}`);
        helper(root.right, `${path}${root.val}`);
    }
    helper(root);
    return sum;
};

let binaryTree;
let pathSum;

binaryTree = new BinaryTree();
for (const iterator of [4, 9, 0, 5, 1, 2]) {
    binaryTree.add(iterator);
}
pathSum = sumNumbers(binaryTree.tree);
console.log(pathSum === 1388);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
pathSum = sumNumbers(binaryTree.tree);
console.log(pathSum === 25);

binaryTree = new BinaryTree();
for (const iterator of [4, 9, 0, 5, 1]) {
    binaryTree.add(iterator);
}
pathSum = sumNumbers(binaryTree.tree);
console.log(pathSum === 1026);
