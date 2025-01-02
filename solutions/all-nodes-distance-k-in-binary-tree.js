const BinaryTree = require('../javascript/binary-tree.js');

function findDistanceFromRoot(root, target) {
    let hasFound = false;
    let targetSide = null;
    let findDistanceFromRootResp = null;
    function findDistanceFromRootHelperFromRightSide(root, distance = 0) {
        if (!root || hasFound) {
            return;
        }
        if (root.val === target) {
            hasFound = true;
            findDistanceFromRootResp = distance;
            targetSide = 'right';
            return;
        }
        findDistanceFromRootHelperFromRightSide(root.right, distance + 1);
        findDistanceFromRootHelperFromRightSide(root.left, distance + 1);
    }

    function findDistanceFromRootHelperFromLeftSide(root, distance = 0) {
        if (!root || hasFound) {
            return;
        }
        if (root.val === target) {
            hasFound = true;
            findDistanceFromRootResp = distance;
            targetSide = 'left';
            return;
        }
        findDistanceFromRootHelperFromLeftSide(root.right, distance + 1);
        findDistanceFromRootHelperFromLeftSide(root.left, distance + 1);
    }
    findDistanceFromRootHelperFromRightSide(root.right);
    findDistanceFromRootHelperFromLeftSide(root.left);
    if (findDistanceFromRootResp === null) {
        findDistanceFromRootResp = 0;
    } else if (findDistanceFromRootResp === 0) {
        findDistanceFromRootResp += 1;
    } else if (findDistanceFromRootResp > 0) {
        findDistanceFromRootResp += 1;
    } else {
        findDistanceFromRootResp += 1;
    }
    return { distanceFromRoot: findDistanceFromRootResp, targetSide };
}

function findChildRoot(root, target) {
    let hasChildFound = false;
    let childHelperResp;
    function childHelper(root) {
        if (!root || hasChildFound) {
            return;
        }
        if (root.val === target) {
            hasChildFound = true;
            childHelperResp = root;
            return;
        }
        childHelper(root.right);
        childHelper(root.left);
    }
    childHelper(root);
    return childHelperResp;
}

function findValueFromRoot(root, distance) {
    let value = [];
    function findValueFromRootHelper(root, curDistance = 0) {
        if (!root) {
            return;
        }
        if (distance === curDistance) {
            if (root.val !== undefined && root.val !== null) {
                value.push(root.val);
            }
        }
        findValueFromRootHelper(root.left, curDistance + 1);
        findValueFromRootHelper(root.right, curDistance + 1);
    }
    findValueFromRootHelper(root);
    return value;
}

var distanceK = function (root, target, k) {
    console.log({ root });
    const output = [];
    const { distanceFromRoot, targetSide } = findDistanceFromRoot(root, target);
    if (distanceFromRoot === k) {
        output.push(root.val);
    } else if (distanceFromRoot === 0) {
        const res = findValueFromRoot(root, k);
        output.push(...res);
    } else {
        if (k - distanceFromRoot - 1 >= 0) {
            if (targetSide === 'left') {
                let res = findValueFromRoot(root.right, k - distanceFromRoot - 1);
                output.push(...res);
            } else {
                let res = findValueFromRoot(root.left, k - distanceFromRoot - 1);
                output.push(...res);
            }
        } else {
            if (targetSide === 'left') {
                let res = findValueFromRoot(root.left, distanceFromRoot - k - 1);
                output.push(...res);
            } else {
                let res = findValueFromRoot(root.right, distanceFromRoot - k - 1);
                output.push(...res);
            }
        }
    }
    const childRootReference = findChildRoot(root, target);
    const childRes = findValueFromRoot(childRootReference, k);
    output.push(...childRes);
    return output;
};

let binaryTree;
let res;

binaryTree = new BinaryTree();
for (const iterator of [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]) {
    binaryTree.add(iterator);
}
res = distanceK(binaryTree.tree, (target = 5), (k = 2));
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
res = distanceK(binaryTree.tree, (target = 1), (k = 3));
console.log(res);
