const BinaryTree = require('../javascript/binary-tree.js');

var minDiffInBST = function (root) {
    var preOrderTraversal = function (root, output = []) {
        if (!root) {
            return output;
        }
        if (root.val !== null) {
            output.push(root.val);
        }
        preOrderTraversal(root.left, output);
        preOrderTraversal(root.right, output);
        return output;
    };
    let smallest = Infinity;
    let difference = Infinity;
    const preOrderTraversalResp = preOrderTraversal(root).sort((a, b) => a - b);
    for (let index = 1; index < preOrderTraversalResp.length; index++) {
        difference = preOrderTraversalResp[index] - preOrderTraversalResp[index - 1];
        if (difference < smallest) {
            smallest = difference;
        }
    }
    return smallest;
};

let binaryTree = new BinaryTree();
for (const iterator of [27, null, 34, null, 58, 50, null, 44]) {
    binaryTree.add(iterator);
}
let first = minDiffInBST(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [4, 2, 6, 1, 3]) {
    binaryTree.add(iterator);
}
first = minDiffInBST(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [1, 0, 48, null, null, 12, 49]) {
    binaryTree.add(iterator);
}
first = minDiffInBST(binaryTree.tree);
console.log({ first });

binaryTree = new BinaryTree();
for (const iterator of [90, 69, null, 49, 89, null, 52]) {
    binaryTree.add(iterator);
}
first = minDiffInBST(binaryTree.tree);
console.log({ first });
//[1, 0, 48, null, null, 12, 49]
//[90,69,null,49,89,null,52]
//[4,2,6,1,3]
