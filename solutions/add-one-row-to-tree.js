const BinaryTree = require('../javascript/binary-tree.js');

class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

var addOneRow = function (root, val, depth, currentDepth = 1) {
    if (!root) {
        return;
    }
    if (depth === 1) {
        const newNodeForLeft = new Node(val);
        newNodeForLeft.left = root;
        return newNodeForLeft;
    } else if (depth - 1 === currentDepth) {
        const newNodeForLeft = new Node(val);
        newNodeForLeft.left = root.left;
        const newNodeForRight = new Node(val);
        newNodeForRight.right = root.right;
        root.left = newNodeForLeft;
        root.right = newNodeForRight;
        return root;
    }

    addOneRow(root.left, val, depth, currentDepth + 1);
    addOneRow(root.right, val, depth, currentDepth + 1);
    return root;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 6, 3, 1, 5]) {
    binaryTree.add(iterator);
}
res = addOneRow(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 6, 3, 1, 5]) {
    binaryTree.add(iterator);
}
res = addOneRow(binaryTree.tree, 1, 3);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 6, 3, 1, 5]) {
    binaryTree.add(iterator);
}
res = addOneRow(binaryTree.tree, 1, 2);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [4, 2, null, 3, 1]) {
    binaryTree.add(iterator);
}
res = addOneRow(binaryTree.tree, 1, 3);
console.log(res);
