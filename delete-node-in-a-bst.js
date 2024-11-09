const BinaryTree = require('../../js/binary-tree.js');

function deleteAndGetSmallestElement(root) {
    let value = null;
    function helper(root) {
        if (!root || value !== null) {
            return;
        }
        if (root.left === null) {
            value = root.val;
            return null;
        }
        root.left = helper(root.left);
    }
    helper(root);
    return value;
}

var deleteNode = function (root, key) {
    function helper(root) {
        if (!root) {
            return;
        }
        if (root.val === key) {
            if (root.left === null && root.right === null) {
                root = null;
                return;
            } else if (root.left === null) {
                root = root.right;
                return;
            } else if (root.right === null) {
                root = root.left;
                return;
            } else {
                const res = deleteAndGetSmallestElement(root);
                root.val = res;
            }
        }
        helper(root.left, key);
        helper(root.right, key);
    }
    helper(root);
    return root;
};

let first;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of (root = [
    100, 50, 150, 25, 75, 125, 175, 13, 38, 68, 88, 113, 138, 168, 188,
])) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 75);
console.log(first); //[100,50,150,25,88,125,175,13,38,68,null,113,138,168,188]

binaryTree = new BinaryTree();
for (const iterator of (root = [
    100, 50, 150, 25, 75, 125, 175, 13, 38, 68, 88, 113, 138, 168, 188,
])) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 50);
console.log(first); //[100,50,150,25,88,125,175,13,38,68,null,113,138,168,188]

binaryTree = new BinaryTree();
for (const iterator of (root = [5, 3, 6, 2])) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 3);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of (root = [5, 3, 6, 2, 4, null, 7])) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 5);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of (root = [5, 3, 6, 2, 4, null, 7])) {
    binaryTree.add(iterator); //[6,3,7,2,4]
}
first = deleteNode(binaryTree.tree, 3);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 8);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 5);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 1);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 1);
console.log(first === true);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 0);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = deleteNode(binaryTree.tree, 1);
console.log(first === false);
