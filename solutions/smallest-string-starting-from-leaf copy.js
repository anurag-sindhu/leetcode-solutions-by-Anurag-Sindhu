const BinaryTree = require('../javascript/binary-tree.js');

function isLeftCharsGreaterThanRight(leftChar, rightChar) {
    if (!leftChar && !rightChar) {
        return true;
    }
    if (leftChar && rightChar) {
        for (let index = 0; index < leftChar.length; index++) {
            if (leftChar[index] && rightChar[index]) {
                if (leftChar[index] === rightChar[index]) {
                    continue;
                }
                if (leftChar[index] > rightChar[index]) {
                    return true;
                }
                return false;
            } else {
                if (leftChar[index]) {
                    return false;
                }
                return true;
            }
        }
    } else {
        if (leftChar) {
            return false;
        }
        return true;
    }
}

function convertNumberToCharacter(num) {
    return String.fromCharCode(97 + num);
}

var smallestFromLeaf = function (root, path = ``) {
    if (!root) {
        return ``;
    }
    const fromLeft = smallestFromLeaf(root.left, path + convertNumberToCharacter(root.val));
    const fromRight = smallestFromLeaf(root.right, path + convertNumberToCharacter(root.val));

    if (!fromLeft && !fromRight) {
        if (isLeftCharsGreaterThanRight(fromLeft, fromRight)) {
            path += `${fromRight}${convertNumberToCharacter(root.val)}`;
        } else {
            path += `${fromLeft}${convertNumberToCharacter(root.val)}`;
        }
    } else if (fromLeft && fromRight) {
        if (isLeftCharsGreaterThanRight(fromLeft, fromRight)) {
            path += `${fromRight}${convertNumberToCharacter(root.val)}`;
        } else {
            path += `${fromLeft}${convertNumberToCharacter(root.val)}`;
        }
    } else if (fromLeft) {
        path += `${fromLeft}${convertNumberToCharacter(root.val)}`;
    } else if (fromRight) {
        path += `${fromRight}${convertNumberToCharacter(root.val)}`;
    }

    return path;
};

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
