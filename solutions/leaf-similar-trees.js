const BinaryTree = require('../javascript/binary-tree.js');

var getAllLeaf = function (root, output = []) {
    if (!root || root.val === null) {
        return null;
    }
    if (
        (!root.left && !root.right) ||
        (root.left && root.left.val === null && root.right && root.right.val === null)
    ) {
        output.push(root.val);
    }
    let res;
    res = getAllLeaf(root.left, output);
    res = getAllLeaf(root.right, output);
    return output;
};

function areArraysEqual(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }
    return true;
}

var leafSimilar = function (root1, root2) {
    const root1Leaf = getAllLeaf(root1);
    const root2Leaf = getAllLeaf(root2);
    return areArraysEqual(root1Leaf, root2Leaf);
};

let binaryTree1;
let binaryTree2;
let res;

binaryTree1 = new BinaryTree();
for (const iterator of [4, 2, 6, 1, 3, 5, 7]) {
    binaryTree1.add(iterator);
}

binaryTree2 = new BinaryTree();
for (const iterator of [4, 2, 6, null, 3, 5, 7]) {
    binaryTree2.add(iterator);
}

res = leafSimilar(binaryTree1.tree, binaryTree2.tree);
console.log(res);

binaryTree1 = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree1.add(iterator);
}

binaryTree2 = new BinaryTree();
for (const iterator of [1, 3, 2]) {
    binaryTree2.add(iterator);
}

res = leafSimilar(binaryTree1.tree, binaryTree2.tree);
console.log(res);

binaryTree1 = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]) {
    binaryTree1.add(iterator);
}

binaryTree2 = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]) {
    binaryTree2.add(iterator);
}

res = leafSimilar(binaryTree1.tree, binaryTree2.tree);
console.log(res);
