const BinaryTree = require('../javascript/binary-tree.js');

var longestUnivaluePath = function (root) {
    if (!root) {
        return 0;
    }
    let maxLength = 0;
    function longestUnivaluePathHelper(root) {
        if (!root || root.val == null) {
            return -Infinity;
        }
        const leftSide = longestUnivaluePathHelper(root.left);
        const rightSide = longestUnivaluePathHelper(root.right);
        if (leftSide == -Infinity && rightSide == -Infinity) {
            return {
                val: root.val,
                len: 1,
            };
        }
        if (leftSide.val == rightSide.val && leftSide.val == root.val) {
            maxLength = Math.max(maxLength, leftSide.len + rightSide.len);
            return {
                val: root.val,
                len: Math.max(leftSide.len, rightSide.len) + 1,
            };
        }
        if (rightSide.val == root.val) {
            maxLength = Math.max(maxLength, rightSide.len);
            return {
                val: root.val,
                len: rightSide.len + 1,
            };
        }
        if (leftSide.val == root.val) {
            maxLength = Math.max(maxLength, leftSide.len);
            return {
                val: root.val,
                len: leftSide.len + 1,
            };
        }
        return -Infinity;
    }
    longestUnivaluePathHelper(root);
    return maxLength;
};

let res;

res = longestUnivaluePath(
    [
        4,
        -7,
        -3,
        null,
        null,
        -9,
        -3,
        9,
        -7,
        -4,
        null,
        6,
        null,
        -6,
        -6,
        null,
        null,
        0,
        6,
        5,
        null,
        9,
        null,
        null,
        -1,
        -4,
        null,
        null,
        null,
        -2,
    ].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 1);

res = longestUnivaluePath(
    [1, 4, 5, 4, 4, null, 5].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 2);

res = longestUnivaluePath(
    [1, 2, 3, 4, 2].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 1);

res = longestUnivaluePath(
    [5, 4, 5, 1, 1, null, 5].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 2);

res = longestUnivaluePath(
    [1, null, 1, 1, 1, 1, 1, 1].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 4);

res = longestUnivaluePath(
    [7, null, 7, 3, 7, 5, 6, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 3);

res = longestUnivaluePath(
    [1, null, 2, 3, 7, 5, 6, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 1);

res = longestUnivaluePath(
    [1, null, 2, 3, 4, 5, 6, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 0);

res = longestUnivaluePath(
    [1, 1, 1].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === 2);
