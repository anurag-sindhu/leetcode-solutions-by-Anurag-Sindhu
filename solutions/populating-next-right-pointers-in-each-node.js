const BinaryTree = require('../../js/binary-tree.js');

var connect = function (root) {
    const levelReferenceMapping = {};
    function collectLevelReferenceMapping(root, level = 1) {
        if (!root) {
            return;
        }
        collectLevelReferenceMapping(root.left, level + 1);
        levelReferenceMapping[level] = root;
    }

    function insertLevelReferenceMapping(root, level = 1) {
        if (!root) {
            return;
        }
        insertLevelReferenceMapping(root.right, level + 1);
        root.next = levelReferenceMapping[level];
    }

    function insertNullLevelReferenceMapping(root) {
        if (!root) {
            return;
        }
        if (!root.next) {
            root.next = null;
        }
        if (root.left && root.left.next === undefined) {
            root.left.next = root.right;
        }
        insertNullLevelReferenceMapping(root.left);
        insertNullLevelReferenceMapping(root.right);
    }
    collectLevelReferenceMapping(root.right);
    insertLevelReferenceMapping(root.left);
    insertNullLevelReferenceMapping(root);
    return root;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();

for (const iterator of [1, 2, 3, 4, 5, 6, 7]) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 5, 3, 4, 6, 7]) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 5, 3, 4, null, 6]) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [0]) {
    binaryTree.add(iterator);
}
res = connect(binaryTree.tree, 1, 1);
console.log(res);
