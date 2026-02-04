const BinaryTree = require('../javascript/binary-tree.js');

var connect1 = function (root) {
    let lastReference = null;
    function explore(root) {
        if (!root) {
            return;
        }
        root.next = lastReference;
        explore(root.right);
        explore(root.left);
        lastReference = root;
    }
    explore(root);
    return root;
};

var connect = function (root) {
    if (!root) return null;

    let levelStart = root;
    while (levelStart.left) {
        let current = levelStart;
        while (current) {
            //kind of BFS approach
            current.left.next = current.right;
            if (current.next) {
                current.right.next = current.next.left;
            }
            current = current.next;
        }
        levelStart = levelStart.left;
    }

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
