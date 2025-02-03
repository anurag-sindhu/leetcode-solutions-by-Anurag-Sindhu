const BinaryTree = require('../javascript/binary-tree.js');

function convertIntoKey(root) {
    if (!root || root.val == null) {
        return '';
    }
    const aa = convertIntoKey(root.left);
    const aaa = convertIntoKey(root.right);
    return `${aa}-${root.val}-${aaa}`;
}

var isSubtree = function (root, subRoot) {
    const aaa = convertIntoKey(root, (key = ''));
    const aa = convertIntoKey(subRoot, (key = ''));
    const indexOf = aaa.indexOf(aa);
    if (aaa === aa) {
        return true;
    }
    if (indexOf != 0) {
        return aaa.indexOf(`-${aa}`) == -1 ? false : true;
    } else {
        return aaa.indexOf(`${aa}-`) == -1 ? false : true;
    }
};

let res;

res = isSubtree(
    [1, 2, 3].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [1, 2].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == false);

res = isSubtree(
    [3, 4, 5, 1, 2, null, null, null, null, 0].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [4, 1, 2].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == false);

res = isSubtree(
    [3, 4, 5, 1, 2, null, null, null, null, 0, 9].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [2, 0, 9].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == true);

res = isSubtree(
    [3, 4, 5, 1, 2, 6, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [5, 6, 7].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == true);

res = isSubtree(
    [3, 4, 5, 1, 2].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
    [4, 1, 2].reduce((acc, curr) => {
        acc.add(curr);
        return acc;
    }, new BinaryTree()).tree,
);
console.log(res == true);
