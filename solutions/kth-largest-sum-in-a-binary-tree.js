const BinaryTree = require('../../js/binary-tree.js');

var kthLargestLevelSumOld = function (root, k) {
    const config = {};
    var kthLargestLevelSumHelper = function (root, level = 1) {
        if (!root) {
            return;
        }
        const value = root.val || 0;
        if (!config[level]) {
            config[level] = 0;
        }
        const prevSum = config[level];
        const totalSum = prevSum + value;
        config[level] = totalSum;
        kthLargestLevelSumHelper(root.left, level + 1);
        kthLargestLevelSumHelper(root.right, level + 1);
    };
    kthLargestLevelSumHelper(root);
    const bucketSort = function (query) {
        const maxNumber = Math.max(...query);
        const arr = new Array(maxNumber);
        for (let index = 0; index < arr.length; index++) {
            if (query[index] !== undefined) {
                if (arr[query[index]] === undefined) {
                    arr[query[index]] = 0;
                }
                arr[query[index]] += 1;
            }
        }
        let sortedArray = []
        for (let index = 0; index < arr.length; index++) {
            for (let indexTemp = 0; indexTemp < arr[index]; indexTemp++) {
                sortedArray.push(index)
            }
        }
        return sortedArray
    };
    const sorted = bucketSort(Object.values(config));
    if (sorted[Object.keys(config).length - k] === undefined) {
        return -1
    }
    return sorted[Object.keys(config).length - k] || -1;
};
var kthLargestLevelSum = function (root, k) {
    const config = {};
    var kthLargestLevelSumHelper = function (root, level = 1) {
        if (!root) {
            return;
        }
        const value = root.val || 0;
        if (!config[level]) {
            config[level] = 0;
        }
        const prevSum = config[level];
        const totalSum = prevSum + value;
        config[level] = totalSum;
        kthLargestLevelSumHelper(root.left, level + 1);
        kthLargestLevelSumHelper(root.right, level + 1);
    };
    kthLargestLevelSumHelper(root);
    const sorted = Object.values(config).sort((a, b) => a - b);
    if (sorted[Object.keys(config).length - k] === undefined) {
        return -1
    }
    return sorted[Object.keys(config).length - k] || -1;
};

let binaryTree;
let res;
binaryTree = new BinaryTree();
for (const iterator of (root = [5, 8, 9, 2, 1, 3, 7, 4, 6])) {
    binaryTree.add(iterator);
}
res = kthLargestLevelSum(binaryTree.tree, (k = 2));
binaryTree = new BinaryTree();
for (const iterator of (root = [5, 8, 5, 2, 1, 3, 7, 4, 6])) {
    binaryTree.add(iterator);
}
res = kthLargestLevelSum(binaryTree.tree, (k = 2));
console.log(res);
console.log(res);

binaryTree = new BinaryTree();
for (const iterator of (root = [1, 2, null, 3])) {
    binaryTree.add(iterator);
}
res = kthLargestLevelSum(binaryTree.tree, (k = 1));
console.log(res);
