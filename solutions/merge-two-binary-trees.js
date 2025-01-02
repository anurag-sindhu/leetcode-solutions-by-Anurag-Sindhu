const BinaryTree = require('../javascript/binary-tree.js');
class Node {
    constructor(val = null) {
        this.val = val || null;
        this.left = null;
        this.right = null;
    }
}

var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) {
        return null;
    }
    const tempSum = ((root1 && root1.val) || 0) + ((root2 && root2.val) || 0);
    if (!root1) {
        return new Node(tempSum);
    } else {
        root1.val = tempSum;
    }
    root1.left = mergeTrees(root1 && root1.left, root2 && root2.left);
    root1.right = mergeTrees(root1 && root1.right, root2 && root2.right);
    return root1;
};

let binaryTree1;
let binaryTree2;
let res;
binaryTree1 = new BinaryTree();
for (const iterator of [1, 2, null, 3]) {
    binaryTree1.add(iterator);
}

binaryTree2 = new BinaryTree();
for (const iterator of [1, null, 2, null, 3]) {
    binaryTree2.add(iterator);
}
res = mergeTrees(binaryTree1.tree, binaryTree2.tree);
console.log(res);

binaryTree1 = new BinaryTree();
for (const iterator of [1, 3, 2, 5]) {
    binaryTree1.add(iterator);
}

binaryTree2 = new BinaryTree();
for (const iterator of [2, 1, 3, null, 4, null, 7]) {
    binaryTree2.add(iterator);
}
res = mergeTrees(binaryTree1.tree, binaryTree2.tree);
console.log(res);
