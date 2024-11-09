const BinaryTree = require('../../js/binary-tree.js');


var sumOfLevels = function (root) {
    const levelMapping = {};
    var averageOfLevelsHelper = function (root, currentLevel = 0, levelMapping = {}) {
        if (!root) {
            return;
        }
        const output = [];
        const value = root.val;
        if (!levelMapping[currentLevel]) {
            levelMapping[currentLevel] = { sum: 0 };
        }
        levelMapping[currentLevel].sum += value;
        averageOfLevelsHelper(root.left, currentLevel + 1, levelMapping);
        averageOfLevelsHelper(root.right, currentLevel + 1, levelMapping);
        return output;
    };
    averageOfLevelsHelper(root, 0, levelMapping);
    return levelMapping;
};

var replaceValueInTreeHelper = function (root, sumOfLevels, currentLevel = 0) {
    if (!root) {
        return
    }
    console.log(root.val);

    replaceValueInTreeHelper(root.left, sumOfLevels, currentLevel + 1)
    replaceValueInTreeHelper(root.right, sumOfLevels, currentLevel + 1)
    if (root.left === null && root.right === null) {
        return
    }
    const sumToParent = ((root.left && root.left.val) || 0) + ((root.right && root.right.val) || 0)
    if (root.left && root.left.val !== null) {
        root.left.val = sumOfLevels[currentLevel + 1].sum - sumToParent
    }
    if (root.right && root.right.val !== null) {
        root.right.val = sumOfLevels[currentLevel + 1].sum - sumToParent
    }
    return root
};

var replaceValueInTree = function (root,) {
    const response = replaceValueInTreeHelper(root, sumOfLevels(root))
    response.val = 0
    return response
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [3, 1, 2]) {
    binaryTree.add(iterator);
}
res = replaceValueInTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 9, 1, 10, null, 7]) {
    binaryTree.add(iterator);
}
res = replaceValueInTree(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 9, 1, 10, 8, 7, 5, 4, 9, 1, 10, 8, 7, 11]) {
    binaryTree.add(iterator);
}
res = replaceValueInTree(binaryTree.tree);
console.log(res);