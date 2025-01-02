const BinaryTree = require('../javascript/binary-tree.js');

var hasPathSum = function (root, targetSum) {
    let output = false;
    function helper(root, path = 0) {
        if (output) {
            return;
        }
        if (!root || root.val === null) {
            return 0;
        }
        if (root.left === null && root.right === null) {
            if (path + root.val == targetSum) {
                output = true;
            }
            return;
        }
        helper(root.left, path + root.val);
        helper(root.right, path + root.val);
    }
    helper(root);
    return output;
};

let first;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 22);
console.log(first === true);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 1);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 1);
console.log(first === true);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 0);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 1);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
first = hasPathSum(binaryTree.tree, 5);
console.log(first === false);
