const BinaryTree = require('../javascript/binary-tree.js');
//[withRoot, withoutRoot]

var process = function (root) {
    if (!root || root.val === null) {
        return { withRoot: 0, withoutRoot: 0 };
    }
    const left = process(root.left);
    const right = process(root.right);
    const withRoot = root.val + left.withoutRoot + right.withoutRoot;
    const withoutRoot =
        Math.max(left.withRoot, left.withoutRoot) + Math.max(right.withoutRoot, right.withRoot);
    return {
        withRoot: withRoot,
        withoutRoot: withoutRoot,
    };
};

var rob = function (root) {
    const aa = process(root);
    return Math.max(aa.withRoot, aa.withoutRoot);
};

let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of [4, 1, null, 2, null, 3]) {
    binaryTree.add(iterator);
}
console.log(rob(binaryTree.tree) === 7);

binaryTree = new BinaryTree();
for (const iterator of [3, 2, 3, null, 3, null, 1]) {
    binaryTree.add(iterator);
}
console.log(rob(binaryTree.tree));

binaryTree = new BinaryTree();
for (const iterator of [3, 4, 5, 1, 3, null, 1]) {
    binaryTree.add(iterator);
}
console.log(rob(binaryTree.tree));
