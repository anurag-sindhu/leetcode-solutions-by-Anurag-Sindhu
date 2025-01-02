const BinaryTree = require('../javascript/binary-tree.js');

var tree2str = function (root, str = '') {
    if (!root) {
        return ``;
    }
    if (
        (!root.left && !root.left) ||
        (root.left && root.left.val === null && root.right && root.right.val === null)
    ) {
        return root.val;
    }
    let tempResLeftSide = tree2str(root.left, str);
    if (tempResLeftSide || tempResLeftSide === 0) {
        str += `(${tempResLeftSide})`;
    }
    let tempResRightSide = tree2str(root.right, str);
    if (tempResRightSide || tempResRightSide === 0) {
        if (!tempResLeftSide && tempResLeftSide !== 0) {
            str += `()`;
        }
        str += `(${tempResRightSide})`;
    }
    const tempResp = `${root.val}${str}`;
    return tempResp;
};

let binaryTree1;
let res;

binaryTree1 = new BinaryTree();
for (const iterator of [1, 2, 3, null, 4]) {
    binaryTree1.add(iterator);
}

res = tree2str(binaryTree1.tree);
console.log(res === '1(2()(4))(3)');

binaryTree1 = new BinaryTree();
for (const iterator of [1, 2, 3, 4]) {
    binaryTree1.add(iterator);
}

res = tree2str(binaryTree1.tree);
console.log(res);
