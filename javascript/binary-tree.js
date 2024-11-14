class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.tree = null;
    }
    findCompletedLevels(tree) {
        if (tree === null) {
            return 0;
        }
        let leftLevel = this.findCompletedLevels(tree.left);
        let rightLevel = Infinity;
        if (tree.right && tree.right.val === null) {
            rightLevel = Infinity;
        } else {
            rightLevel = this.findCompletedLevels(tree.right);
        }
        return 1 + Math.min(leftLevel, rightLevel);
    }
    addNode(data, tree) {
        if (data === null) {
            // console.log('object');
        }
        const completeBinaryTreeHeightOfLeftSide = this.findCompletedLevels(tree.left);
        const completeBinaryTreeHeightOfRightSide = this.findCompletedLevels(tree.right);
        if (completeBinaryTreeHeightOfLeftSide > completeBinaryTreeHeightOfRightSide) {
            //fits right side
            if (tree.right && tree.left.right === null) {
                this.addNode(data, tree.left);
            } else {
                if (tree.right) {
                    this.addNode(data, tree.right);
                } else {
                    tree.right = new Node(data);
                }
            }
        } else {
            //fits left side
            if (tree.left && tree.left.val === null) {
                this.addNode(data, tree.right);
            } else {
                if (tree.left) {
                    this.addNode(data, tree.left);
                } else {
                    tree.left = new Node(data);
                }
            }
        }
    }
    add(data) {
        if (!this.tree) {
            const node = new Node(data);
            this.tree = node;
        } else {
            this.addNode(data, this.tree);
        }
    }
    removeElementsHavingNull(tree) {
        if (!tree || tree.val === null) {
            return null;
        }
        tree.left = this.removeElementsHavingNull(tree.left);
        tree.right = this.removeElementsHavingNull(tree.right);
        return tree;
    }
    createFromArray(arr) {
        const binaryTree = new BinaryTree();
        for (const iterator of arr) {
            binaryTree.add(iterator);
        }
        let res = this.removeElementsHavingNull(binaryTree.tree);
        return res;
    }
    minNumberExcept(root, smallest = Infinity, except) {
        if (!root) {
            return smallest;
        }
        if (root.val !== null && root.val < smallest && root.val !== except) {
            smallest = root.val;
        }
        const smallestFromLeft = minNumberExcept(root.left, smallest, except);
        const smallestFromRight = minNumberExcept(root.right, smallest, except);
        return Math.min(smallestFromLeft, smallestFromRight);
    }
    minNumber(root, smallest = Infinity, except) {
        if (!root) {
            return smallest;
        }
        if (root.val !== null && root.val < smallest) {
            smallest = root.val;
        }
        const smallestFromLeft = minNumber(root.left, smallest);
        const smallestFromRight = minNumber(root.right, smallest);
        return Math.min(smallestFromLeft, smallestFromRight);
    }
}
// const binaryTree = new BinaryTree();
// for (const iterator of [0, null, -1]) {
//   binaryTree.add(iterator);
//   console.log({ binaryTree });
// }

module.exports = BinaryTree;
