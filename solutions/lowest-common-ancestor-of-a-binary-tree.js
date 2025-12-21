const BinaryTree = require('../javascript/binary-tree.js');

var lowestCommonAncestor = function (root, p, q) {
    const isRootMatching = root === p || root === q;
    if (isRootMatching) {
        return root;
    }
    function explore(root) {
        let isP = false;
        let isQ = false;
        function exploreHelper(root) {
            if (!root) {
                return;
            }
            if (p === root) {
                isP = true;
            }
            if (q === root) {
                isQ = true;
            }
            exploreHelper(root.left);
            exploreHelper(root.right);
        }
        exploreHelper(root);
        return { isP, isQ };
    }
    function exploreAgain(root) {
        let reference = null;
        function exploreHelper(root) {
            if (!root) {
                return;
            }
            if (p === root && reference == null) {
                reference = root;
            }
            if (q === root && reference == null) {
                reference = root;
            }
            exploreHelper(root.left);
            exploreHelper(root.right);
        }
        exploreHelper(root);
        return reference;
    }

    const leftNodeCount = explore(root.left);
    if (
        (leftNodeCount.isP && leftNodeCount.isQ === false) ||
        (leftNodeCount.isQ && leftNodeCount.isP === false)
    ) {
        return root;
    }
    if (leftNodeCount.isP && leftNodeCount.isQ) {
        return exploreAgain(root.left);
    }
    return exploreAgain(root.right);
};

let binaryTree;
let resp;
binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(
    new BinaryTree().createFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).tree,
    (p = 1),
    (q = 2),
);
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 1), (q = 2));
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 4));
console.log(resp);

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 1));
console.log(resp);
