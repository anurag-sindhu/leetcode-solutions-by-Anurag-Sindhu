const BinarySearchTree = require('../javascript/binary-search-tree.js');
const { areTwoArrayEqual } = require('../javascript/compare-two-array.js');

var BSTIterator = function (root) {
    this.stack = [];
    this.root = root;
};

/**
 Use a stack s to simulate recursion.
Traverse left while pushing nodes onto the stack.
When calling next(), pop the node and process its right subtree next.
hasNext() checks if either the stack or the current pointer has nodes left to explore
 */
BSTIterator.prototype.next = function () {
    while (this.root) {
        if (this.root.val == null) {
            break;
        }
        this.stack.push(this.root);
        this.root = this.root.left;
    }
    let x = this.stack.pop();
    this.root = x.right;
    return x.val;
};

BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0 || this.root !== null;
};

let obj;
let operations;
let values;
let res;
let output = [null];

operations = [
    'BSTIterator',
    'next',
    'next',
    'hasNext',
    'next',
    'hasNext',
    'next',
    'hasNext',
    'next',
    'hasNext',
];

const binarySearchTree = new BinarySearchTree();
for (const iterator of [7, 3, 15, null, null, 9, 20]) {
    binarySearchTree.add(iterator);
}
values = [[binarySearchTree.tree], [], [], [], [], [], [], [], [], []];
obj = new BSTIterator(...values[0]);

for (let index = 1; index < operations.length; index++) {
    output.push(obj[operations[index]](...values[index]));
}

res = areTwoArrayEqual(
    [null, true, true, true, true, true, true, false, false, 0, 0, true],
    output,
);
console.log({ res });
