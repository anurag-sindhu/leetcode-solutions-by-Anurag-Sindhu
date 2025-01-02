const BinaryTree = require('../javascript/binary-tree.js');

function findElementFromGivenLevel(root, level, currentLevel = 1) {
    if (!root) {
        return null;
    }
    if (level === currentLevel) {
        return root.val;
    } else {
        let element = null;
        element = findElementFromGivenLevel(root.right, level, currentLevel + 1);
        if (element || element === 0) {
            return element;
        }
        element = findElementFromGivenLevel(root.left, level, currentLevel + 1);
        return element;
    }
}

function countLevels(root, level = 0) {
    if (!root) {
        return level;
    }
    return Math.max(countLevels(root.left, level + 1), countLevels(root.right, level + 1));
}

function rightSideView1(root) {
    if (!root) {
        return [];
    }
    const totalLevels = countLevels(root);
    const output = [];
    for (let level = 1; level <= totalLevels; level++) {
        let tempRes = findElementFromGivenLevel(root, level);
        output.push(tempRes);
    }
    return output;
}

function rightSideView(root, output = [], level = 0) {
    if (!root) {
        return [];
    }
    if ((root.val || root.val === 0) && output.length === level) {
        output.push(root.val);
    }
    rightSideView(root.right, output, level + 1);
    if (level + 1 === output.length) {
        rightSideView(root.left, output, level + 1);
    }
    return output;
}

// function rightSideView(root) {
//   if (!root) {
//     return [];
//   }
//   return rightSideViewHelper(root);
// }

let res;

res = rightSideView(new BinaryTree().createFromArray([1, 2, 3, null, 5, 4, null]));
console.log(res);

res = rightSideView(new BinaryTree().createFromArray([1, 2, 3, null, null, 4]));
console.log(res);

res = rightSideView(new BinaryTree().createFromArray([1, 2, 0]));
console.log(res); //1,0

res = rightSideView(new BinaryTree().createFromArray([1, null, 3]));
console.log(res);

res = rightSideView(new BinaryTree().createFromArray([1, 2, 3, null, 5, null, 4]));
console.log(res);

res = rightSideView(new BinaryTree().createFromArray([]));
console.log(res);
