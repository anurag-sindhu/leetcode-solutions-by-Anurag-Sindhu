const BinaryTree = require('../javascript/binary-tree.js');

//level-order traversal.
var connect1 = function (root) {
    let q = [root];
    while (q[0]) {
        let qlen = q.length,
            prevReference = null;
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift();
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
            if (prevReference) {
                prevReference.next = curr;
            }
            prevReference = curr;
        }
    }
    return root;
};

var connect11 = function (root) {
    const ar = [root];
    while (ar.length) {
        let len = ar.length;
        let lastPointerReference = '';
        for (let index = 0; index < len; index++) {
            const element = ar.shift();
            if (lastPointerReference) {
                element.next = lastPointerReference;
            }
            if (element.right) {
                ar.push(element.right);
            }
            if (element.left) {
                ar.push(element.left);
            }
            lastPointerReference = element;
        }
    }
    return root;
};

var connect = function (root) {
    if (!root) return null;

    let levelStart = root;
    while (levelStart.left) {
        let current = levelStart;
        while (current) {
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

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7]) {
    binaryTree.add(iterator);
}
first = connect(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3, 5, 8, 7, 6, 6, 7, 8, 5]) {
    binaryTree.add(iterator);
}
first = connect(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, null, 7]) {
    binaryTree.add(iterator);
}
first = connect(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, 3, 4, 4, 3]) {
    binaryTree.add(iterator);
}
first = connect(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 2, null, 3, null, 3]) {
    binaryTree.add(iterator);
}
first = connect(binaryTree.tree);
console.log({ first });
