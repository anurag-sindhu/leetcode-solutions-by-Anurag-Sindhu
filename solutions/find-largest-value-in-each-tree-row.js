const BinaryTree = require('../javascript/binary-tree.js');

var largestValues = function (root, level = 0, arr = []) {
    if (!root) {
        return;
    }
    if (arr[level] == undefined) {
        arr[level] = root.val;
    } else if (arr[level] < root.val) {
        arr[level] = root.val;
    }
    largestValues(root.left, level + 1, arr);
    largestValues(root.right, level + 1, arr);
    return arr;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 3, 2, 5, 3, null, 9]) {
    binaryTree.add(iterator);
}
res = largestValues(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of (root = [1, 2, 3])) {
    binaryTree.add(iterator);
}
res = largestValues(binaryTree.tree);
console.log(res);
