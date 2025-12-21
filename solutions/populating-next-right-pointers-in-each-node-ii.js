const BinaryTree = require('../javascript/binary-tree.js');

//level-order traversal.
var connect = function (root) {
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
