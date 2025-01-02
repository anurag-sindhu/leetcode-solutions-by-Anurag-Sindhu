const BinaryTree = require('../javascript/binary-tree.js');

var binaryTreePaths = function (root, tempSum = ``, sum = []) {
    if (!root) {
        return sum;
    }
    if (root.val === null) {
        return sum;
    } else if (!root.left && !root.right) {
        if (root.val) {
            if (tempSum) {
                tempSum += `->${root.val}`;
            } else {
                tempSum += `${root.val}`;
            }
        }
        sum.push(tempSum);
        return sum;
    }
    if (root.val) {
        if (tempSum) {
            tempSum += `->${root.val}`;
        } else {
            tempSum += `${root.val}`;
        }
    }
    binaryTreePaths(root.left, tempSum, sum);
    binaryTreePaths(root.right, tempSum, sum);
    return sum;
};

let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, null, 5]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [-2, -1]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [1, -2, 3]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [2, -1]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [-3]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, -5, -6, -7]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [-10, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
res = binaryTreePaths(binaryTree.tree);
console.log(res);
