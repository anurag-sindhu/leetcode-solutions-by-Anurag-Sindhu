const BinaryTree = require('../javascript/binary-tree.js');
class Node {
    constructor(val = null) {
        this.val = val || null;
        this.left = null;
        this.right = null;
    }
}

var mergeTrees = function (t1, t2) {
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }
    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

let res;

res = mergeTrees(
    [1, 2, null, 3].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [1, null, 2, null, 3].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res);

res = mergeTrees(
    [1, 3, 2, 5].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [2, 1, 3, null, 4, null, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res);
