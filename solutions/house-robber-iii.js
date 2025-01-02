const BinaryTree = require('../javascript/binary-tree.js');
//[withRoot, withoutRoot]

var process = function (root) {
    if (!root || root.val === null) {
        return [0, 0];
    }
    const left = process(root.left);
    const right = process(root.right);
    const withRoot = root.val + left[1] + right[1];
    const withoutRoot = Math.max(...left) + Math.max(...right);
    return [withRoot, withoutRoot];
};

var rob = function (root) {
    return Math.max(...process(root));
};

let binaryTree;
binaryTree = new BinaryTree();
for (const iterator of [3, 4, 5, 1, 3, null, 1]) {
    binaryTree.add(iterator);
}
console.log(rob(binaryTree.tree));

binaryTree = new BinaryTree();
for (const iterator of [3, 2, 3, null, 3, null, 1]) {
    binaryTree.add(iterator);
}
console.log(rob(binaryTree.tree));
