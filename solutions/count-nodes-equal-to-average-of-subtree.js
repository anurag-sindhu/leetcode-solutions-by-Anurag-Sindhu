const BinaryTree = require('../javascript/binary-tree.js');

var averageOfSubtree = function (root) {
    let count = 0;
    function averageOfSubtreeHelper(root, cnt = 1) {
        if (!root) {
            return { sum: null, cnt: 0 };
        }
        let leftSide = averageOfSubtreeHelper(root.left);
        let rightSide = averageOfSubtreeHelper(root.right);
        let nodes = 0;
        if (root.val !== null) {
            nodes += 1;
        }
        if (leftSide.sum !== null) {
            nodes += leftSide.cnt;
        }
        if (rightSide.sum !== null) {
            nodes += rightSide.cnt;
        }
        const obj = {
            sum: (root.val || 0) + (leftSide.sum || 0) + (rightSide.sum || 0),
            cnt: nodes,
        };
        if (parseInt(obj.sum / obj.cnt) === root.val) {
            count += 1;
        }
        return obj;
    }
    averageOfSubtreeHelper(root);
    return count;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [4, 8, 5, 0, 1, null, 6]) {
    binaryTree.add(iterator);
}
res = averageOfSubtree(binaryTree.tree);
console.log(res);
