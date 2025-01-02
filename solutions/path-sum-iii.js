const BinaryTree = require('../javascript/binary-tree.js');

var pathSum = function (root, targetSum) {
    let output = 0;
    function helper(root, path = 0) {
        if (!root || root.val === null) {
            return 0;
        }
        if (path + root.val == targetSum) {
            output += 1;
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
for (const iterator of [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 8);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 5);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 1);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 1);
console.log(first === true);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 0);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = pathSum(binaryTree.tree, 1);
console.log(first === false);
