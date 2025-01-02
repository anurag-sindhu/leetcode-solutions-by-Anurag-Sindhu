const BinaryTree = require('../javascript/binary-tree.js');

var zigzagLevelOrder = function (root, output = [], level = 0) {
    if (!root) {
        return [];
    }
    if (!output[level]) {
        output[level] = [];
    }
    if (root.val || root.val === 0) {
        if (level % 2 === 0) {
            output[level].push(root.val);
        } else {
            output[level] = [root.val, ...output[level]];
        }
    }

    zigzagLevelOrder(root.left, output, level + 1);
    zigzagLevelOrder(root.right, output, level + 1);
    return output;
};

let res;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
res = zigzagLevelOrder(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
res = zigzagLevelOrder(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
res = zigzagLevelOrder(binaryTree.tree);
console.log(res);
