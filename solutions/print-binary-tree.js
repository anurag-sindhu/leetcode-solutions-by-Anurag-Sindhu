const BinaryTree = require('../javascript/binary-tree.js');

var heightOfTree = function (root) {
    if (!root) {
        return 0;
    }
    const leftNode = heightOfTree(root.left);
    return 1 + leftNode;
};

var printTree = function (root) {
    const output = [];
    const maxHeight = heightOfTree(root);
    const totalNodes = Math.pow(2, maxHeight) - 1;
    var printTreeHelper = function (root, height = 0, index = null, isLeft = null) {
        if (!root || root.val == null) {
            return;
        }
        if (!output[height]) {
            output[height] = [];
        }
        if (index === null) {
            index = (totalNodes - 1) / 2;
            if (root.val != undefined) {
                output[height][index] = String(root.val);
            }
        } else {
            const temp = Math.pow(2, maxHeight - height - 1);
            if (isLeft) {
                index -= temp;
                if (root.val != undefined) {
                    output[height][index] = String(root.val);
                }
            } else {
                index += temp;
                if (root.val != undefined) {
                    output[height][index] = String(root.val);
                }
            }
        }
        printTreeHelper(root.left, height + 1, index, true);
        printTreeHelper(root.right, height + 1, index, false);
    };
    printTreeHelper(root);
    for (let index = 0; index < maxHeight; index++) {
        for (let nodesIndex = 0; nodesIndex < totalNodes; nodesIndex++) {
            if (output[index][nodesIndex] == undefined) {
                output[index][nodesIndex] = '';
            }
        }
    }
    return output;
};

let binaryTree;
let output;

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, null, 4]) {
    binaryTree.add(iterator);
}
res = printTree(binaryTree.tree);
output = [
    ['', '', '', '', '', '', '', '1', '', '', '', '', '', '', ''],
    ['', '', '', '2', '', '', '', '', '', '', '', '3', '', '', ''],
    ['', '4', '', '', '', '5', '', '', '', '6', '', '', '', '7', ''],
    ['8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15'],
];
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    binaryTree.add(iterator);
}
res = printTree(binaryTree.tree);
output = [
    ['', '', '', '', '', '', '', '1', '', '', '', '', '', '', ''],
    ['', '', '', '2', '', '', '', '', '', '', '', '3', '', '', ''],
    ['', '4', '', '', '', '5', '', '', '', '6', '', '', '', '7', ''],
    ['8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15'],
];

console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
res = printTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, null, 4]) {
    binaryTree.add(iterator);
}
res = printTree(binaryTree.tree);
console.log(res);
