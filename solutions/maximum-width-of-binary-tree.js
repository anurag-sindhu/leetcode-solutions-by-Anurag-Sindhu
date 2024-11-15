const BinaryTree = require('../../js/binary-tree.js');

var widthOfBinaryTree1 = function (root) {
    const levelConfig = {};
    function helper(root, parentRoot = 1, level = 0) {
        if (!root) {
            return;
        }
        if (!levelConfig[level]) {
            levelConfig[level] = { min: Infinity, max: -Infinity };
        }
        root.val = parentRoot;
        levelConfig[level].min = Math.min(levelConfig[level].min, root.val);
        levelConfig[level].max = Math.max(levelConfig[level].max, root.val);
        helper(root.left, root.val * 2, level + 1);
        helper(root.right, root.val * 2 + 1, level + 1);
        return root;
    }
    helper(root);
    let maxDiff = 0;
    for (const key in levelConfig) {
        maxDiff = Math.max(maxDiff, levelConfig[key].max - levelConfig[key].min + 1);
    }
    return maxDiff;
};
var widthOfBinaryTree = function (root) {
    const minPos = [0];
    let maxWidth = 0;

    callDFS(root, 0, 0);
    return maxWidth;

    function callDFS(node, level, pos) {
        if (!node) return;
        if (minPos[level] === undefined) minPos.push(pos);

        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff + 1);

        callDFS(node.left, level + 1, diff * 2);
        callDFS(node.right, level + 1, diff * 2 + 1);
    }
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    null,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
]) {
    binaryTree.add(iterator * 4);
}
res = widthOfBinaryTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of (root = [1, 3, 2, 5])) {
    binaryTree.add(iterator * 4);
}
res = widthOfBinaryTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    binaryTree.add(iterator * 4);
}
res = widthOfBinaryTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 3, 2, 5, null, null, 9, 6, null, 7]) {
    binaryTree.add(iterator);
}
res = widthOfBinaryTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1, 3, 2, 5, 3, null, 9]) {
    binaryTree.add(iterator);
}
res = widthOfBinaryTree(binaryTree.tree);
console.log(res);
