const BinaryTree = require('../../js/binary-tree.js');
class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}
var linkedList = null;
var flatten1 = function (root) {
    if (!root) {
        return;
    }
    flatten(root.right);
    flatten(root.left);
    if (root.val !== null) {
        const newNode = new Node(root.val);
        if (linkedList === null) {
            linkedList = newNode;
        } else {
            newNode.next = linkedList;
            linkedList = newNode;
        }
        console.log(root.val);
    }
};

var flatten = function (root) {
    function flattenHelperLeftSide(leftRoot) {
        if (!leftRoot) {
            return;
        }
        flattenHelperLeftSide(leftRoot.left);
        flattenHelperLeftSide(leftRoot.right);
        if (leftRoot.left && leftRoot.left.val !== null) {
            const rootRight = leftRoot.right;
            leftRoot.right = leftRoot.left;
            leftRoot.right.right = rootRight;
            leftRoot.left = null;
            console.log(leftRoot.val);
        }
    }

    function flattenHelperRightSide(rightRoot) {
        if (!rightRoot) {
            return;
        }
        flattenHelperRightSide(rightRoot.left);
        if (rightRoot.left && rightRoot.left.val !== null) {
            const rootLeft = rightRoot.right;
            rightRoot.right = rightRoot.left;
            rightRoot.right.right = rootLeft;
            rightRoot.left = null;
        }
        flattenHelperRightSide(rightRoot.right);
    }

    function flattenHelper(root) {
        if (!root) {
            return;
        }
        flattenHelper(root.left);
        if (root.left && root.left.val !== null) {
            const rootRight = root.right;
            root.right = root.left;
            root.right.right = rootRight;
            console.log(root.val);
        }
        flattenHelper(root.right);
    }
    flattenHelperLeftSide(root.left);
    flattenHelperRightSide(root.right);
    if (root.left && root.left.val !== null) {
        const rootRight = root.right;
        const rootLeft = root.left;
        root.right = rootLeft;
        root.right.right = rootLeft;
        root.left = null;
    }
    flattenHelper(root);
    return;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    binaryTree.add(iterator);
}
res = flatten(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 5, 3, 4, 6, 7]) {
    binaryTree.add(iterator);
}
res = flatten(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 5, 3, 4, null, 6]) {
    binaryTree.add(iterator);
}
res = flatten(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
res = flatten(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [0]) {
    binaryTree.add(iterator);
}
res = flatten(binaryTree.tree, 1, 1);
console.log(res);
