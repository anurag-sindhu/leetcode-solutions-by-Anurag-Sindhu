class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.tree = null;
    }
    addNode(data, tree) {
        if (tree.val > data) {
            if (!tree.left) {
                tree.left = new Node(data);
            } else {
                this.addNode(data, tree.left);
            }
        } else {
            if (!tree.right) {
                tree.right = new Node(data);
            } else {
                this.addNode(data, tree.right);
            }
        }
    }
    add(data) {
        const node = new Node(data);
        if (!this.tree) {
            this.tree = node;
        } else {
            this.addNode(data, this.tree);
        }
    }
}

var middle = function (nums) {
    const half = Math.floor(nums.length / 2);
    return { leftArray: nums.slice(0, half), root: nums[half], rightArray: nums.slice(half + 1) };
};
var sortedArrayToBST = function (nums) {
    const { leftArray, root, rightArray } = middle(nums);
    const tree = new BinarySearchTree();
    tree.add(root);
    for (let index = leftArray.length - 1; index >= 0; index--) {
        tree.add(leftArray[index]);
    }
    for (let index = 0; index < rightArray.length; index++) {
        tree.add(rightArray[index]);
    }
    return tree.tree;
};

let resp = null;

resp = sortedArrayToBST([0, 1, 2, 3, 4, 5]);
console.log(resp);

resp = sortedArrayToBST([-1, 0, 1, 2]);
console.log(resp);
resp = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(resp);
//[0,-3,9,-10,null,5]
resp = sortedArrayToBST([1, 2, 3]);
console.log(resp);
resp = sortedArrayToBST([1, 2, 3, 4]);
console.log(resp);
resp = sortedArrayToBST([0, 1, 2, 3, 4, 5]);
console.log(resp);
// [3, 1, 5, 0, 2, 4];
resp = sortedArrayToBST([1, 3]);
console.log(resp);
//[3,1]
