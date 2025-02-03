const BinaryTree = require('../javascript/binary-tree.js');

var tree2str = function (root) {
    if (!root) {
        return '';
    }

    let str = `${root.val}`;

    if (root.left || root.right) {
        str += `(${tree2str(root.left)})`;
    }

    if (root.right) {
        str += `(${tree2str(root.right)})`;
    }

    return str;
};

let res;

res = tree2str(
    [1, 2, 3, null, 4].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === '1(2()(4))(3)');

res = tree2str(
    [1, 2, 3, 4, 5, 6, 7, 8].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === '1(2(4(8))(5))(3(6)(7))');

res = tree2str(
    [1, 2, 3, 4, 5, 6].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res === '1(2(4)(5))(3(6))');

res = tree2str(
    [1, 2, 3, 4].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == '1(2(4))(3)');
