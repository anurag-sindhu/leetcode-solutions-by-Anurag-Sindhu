const BinaryTree = require('../javascript/binary-tree.js');

var averageOfLevels1 = function (root) {
    const levelMapping = {};
    var averageOfLevelsHelper = function (root, currentLevel = 0, levelMapping = {}) {
        if (!root) {
            return;
        }
        const output = [];
        const value = root.val;
        if (!levelMapping[currentLevel]) {
            levelMapping[currentLevel] = { sum: 0, count: 0 };
        }
        levelMapping[currentLevel].sum += value;
        levelMapping[currentLevel].count += 1;
        averageOfLevelsHelper(root.left, currentLevel + 1, levelMapping);
        averageOfLevelsHelper(root.right, currentLevel + 1, levelMapping);
        return output;
    };
    averageOfLevelsHelper(root, 0, levelMapping);
    const output = [];
    for (const key in levelMapping) {
        output.push((levelMapping[key].sum / levelMapping[key].count).toFixed(5));
    }
    return output;
};

var averageOfLevels = function (root) {
    const output = [];
    let q = [root];
    while (q[0]) {
        let qLen = q.length;
        let sum = 0;
        for (let i = 0; i < qLen; i++) {
            let curr = q.shift();
            sum += curr.val;
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
        }
        output.push(sum / qLen);
    }
    return output;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, 15, 7]) {
    binaryTree.add(iterator);
}
res = averageOfLevels(binaryTree.tree);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [3, 9, 20, null, null, 15, 7]) {
    binaryTree.add(iterator);
}
res = averageOfLevels(binaryTree.tree);
console.log(res);
