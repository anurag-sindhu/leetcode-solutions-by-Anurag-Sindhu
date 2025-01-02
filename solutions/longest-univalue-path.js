const BinaryTree = require('../javascript/binary-tree.js');

var longestUnivaluePath = function (root) {
    if (!root) {
        return 0;
    }
    let maxLength = 0;
    function longestUnivaluePathHelper(root, value = null, count = 1) {
        if (!root) {
            return { count, value };
        }
        const rootValue = root.val;
        let leftLength = 0;
        let rightLength = 0;
        if (rootValue === value) {
            leftLength = longestUnivaluePathHelper(root.left, rootValue, count + 1);
        } else {
            leftLength = longestUnivaluePathHelper(root.left, rootValue, 0);
        }
        if (rootValue === value) {
            rightLength = longestUnivaluePathHelper(root.right, rootValue, count + 1);
        } else {
            rightLength = longestUnivaluePathHelper(root.right, rootValue, 0);
        }
        let temp = null;
        if (leftLength.value === rootValue) {
            if (temp === null) {
                temp = 1;
            }
            temp += leftLength.count;
        }
        if (rightLength.value === rootValue) {
            if (temp === null) {
                temp = 1;
            }
            temp += rightLength.count;
        }
        if (maxLength < temp) {
            maxLength = temp;
        }
        return temp;
    }
    longestUnivaluePathHelper(root);
    return maxLength;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [1, 4, 5, 4, 4, null, 5]) {
    binaryTree.add(iterator);
}
res = longestUnivaluePath(binaryTree.tree, 1, 1);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 5, 1, 1, null, 5]) {
    binaryTree.add(iterator);
}
res = longestUnivaluePath(binaryTree.tree, 1, 1);
console.log(res);
