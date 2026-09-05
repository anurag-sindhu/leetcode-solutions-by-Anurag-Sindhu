const BinaryTree = require('../javascript/binary-tree.js');
/**
The idea is to traverse the tree and find the node where both p and q split into different subtrees.
That node is the Lowest Common Ancestor.
We use postorder traversal to return the LCA once both sides have non-null results.

Base case: If root is null, return null.
If root is equal to either p or q, return root.
Recursively check left and right subtree.
If both return non-null, current node is the LCA.
If only one is non-null, propagate it upward.
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    return left || right;
};

let binaryTree;
let resp;

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 1));
console.log(resp);

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
resp = lowestCommonAncestor(binaryTree.tree, (p = 5), (q = 1));
console.log(resp);
