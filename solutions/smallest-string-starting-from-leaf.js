const BinaryTree = require('../javascript/binary-tree.js');

function isLeftCharsGreaterThanRight(leftChar = ``, rightChar = ``) {
    if (leftChar === rightChar) {
        return true;
    }
    const revLeftChar = leftChar.split('').reverse().join('');
    const revRightChar = rightChar.split('').reverse().join('');

    if (revLeftChar.length > revRightChar.length) {
        for (let index = 0; index < revLeftChar.length; index++) {
            if (revLeftChar[index] === revRightChar[index]) {
                continue;
            }
            if (revRightChar[index] === undefined) {
                return true;
            }
            if (revLeftChar[index] < revRightChar[index]) {
                return false;
            }
            return true;
        }
    } else {
        for (let index = 0; index < revRightChar.length; index++) {
            if (revLeftChar[index] === revRightChar[index]) {
                continue;
            }
            if (revLeftChar[index] === undefined) {
                return false;
            }
            if (revLeftChar[index] < revRightChar[index]) {
                return false;
            }
            return true;
        }
    }
    return;
}

function convertNumberToCharacter(num) {
    return String.fromCharCode(97 + num);
}

var smallestFromLeafHelper = function (root, path = ``) {
    if (!root) {
        return path;
    }
    const fromLeft = smallestFromLeafHelper(root.left, path + convertNumberToCharacter(root.val));
    const fromRight = smallestFromLeafHelper(root.right, path + convertNumberToCharacter(root.val));
    if (root.left && root.right) {
        if (isLeftCharsGreaterThanRight(fromLeft, fromRight)) {
            return fromRight;
        } else {
            return fromLeft;
        }
    } else if (!root.left && !root.right) {
        if (isLeftCharsGreaterThanRight(fromLeft, fromRight)) {
            return fromRight;
        } else {
            return fromLeft;
        }
    } else if (root.left && root.right && root.left.val === null && root.right.val === null) {
        if (isLeftCharsGreaterThanRight(fromLeft, fromRight)) {
            return fromRight;
        } else {
            return fromLeft;
        }
    } else if (root.left) {
        return fromLeft;
    } else {
        return fromRight;
    }
};

function smallestFromLeaf(root) {
    const res = smallestFromLeafHelper(root);
    return res.split('').reverse().join('');
}

let res;

res = smallestFromLeaf(new BinaryTree().createFromArray([2, 2, 1, null, 1, 0, null, 0]));
console.log(res === 'abc');

res = smallestFromLeaf(new BinaryTree().createFromArray([4, 0, 1, 1]));
console.log(res === 'bae');

res = smallestFromLeaf(new BinaryTree().createFromArray([3, 9, 20, null, null, 15, 7]));
console.log(res === 'hud');

res = smallestFromLeaf(new BinaryTree().createFromArray([2, 2, 1, null, 1, 0, null, 0]));
console.log(res === `abc`);

res = smallestFromLeaf(new BinaryTree().createFromArray([25, 1, 3, 1, 3, 0, 2]));
console.log(res === `adz`);

res = smallestFromLeaf(new BinaryTree().createFromArray([0, 1, 2, 3, 4, 3, 4]));
console.log(res === `dba`);
