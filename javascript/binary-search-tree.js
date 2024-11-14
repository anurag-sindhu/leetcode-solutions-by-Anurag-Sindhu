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
    remove(data) {
        this.tree = this.removeNode(this.tree, data);
    }
    removeNode(tree, data) {
        if (!tree) {
            return null;
        }
        if (tree.data > data) {
            tree.left = this.removeNode(tree.left, data);
            return tree;
        } else if (tree.data < data) {
            tree.right = this.removeNode(tree.right, data);
            return tree;
        } else {
            if (!tree.left && !tree.right) {
                tree = null;
                return tree;
            }
            if (!tree.left) {
                const tempData = tree.right.data;
                tree.data = tempData;
                tree.right = null;
                return tree;
            }
            if (!tree.right) {
                const tempData = tree.left.data;
                tree.data = tempData;
                tree.left = null;
                return tree;
            }
            const tempData = tree.right.data;
            tree.data = tempData;
            tree.right = null;
            return tree;
        }
    }
    getTree() {
        console.log(this.tree);
        return this.tree;
    }
    inOrder(tree, output = []) {
        if (!tree) {
            return output;
        }
        this.inOrder(tree.left, output);
        output.push(tree.data);
        this.inOrder(tree.right, output);
    }
    inOrderTraversal() {
        return this.inOrder(this.tree);
    }
    preOrder(tree, output = []) {
        if (!tree) {
            return output;
        }
        output.push(tree.data);
        this.preOrder(tree.left, output);
        this.preOrder(tree.right, output);
    }
    postOrder(tree, output = []) {
        if (!tree) {
            return output;
        }
        this.postOrder(tree.left, output);
        this.postOrder(tree.right, output);
        output.push(tree.data);
        console.log({ output });
    }
    findMinNode(tree = this.tree) {
        if (!tree.left) {
            return tree.data;
        }
        return this.findMinNode(tree.left);
    }
    preOrderTraversal() {
        return this.postOrder(this.tree);
    }
    search(tree = this.tree, data) {
        if (!tree) {
            return null;
        }
        if (tree.data > data) {
            return this.search(tree.left, data);
        } else if (tree.data < data) {
            return this.search(tree.right, data);
        } else {
            return tree;
        }
    }
    isSymmetric(root = this.tree) {
        if (!root) {
            return true;
        }
        if (!root.length) {
            return true;
        }
        const isSymmetric = (leftTree, rightTree) => {
            if (!leftTree && !rightTree) {
                return true;
            }
            if (!leftTree || !rightTree) {
                return false;
            }
            if (leftTree.data !== rightTree.data) {
                return false;
            }
            return (
                isSymmetric(leftTree.left, leftTree.right) &&
                isSymmetric(leftTree.right, leftTree.left)
            );
        };
        return isSymmetric2(root.left, root.right);
    }

    diameter(root = this.tree, max = 0) {
        if (!root) {
            return 0;
        }
        const lDiameter = this.diameter(root.left, max);
        const rDiameter = this.diameter(root.right, max);
        max = Math.max(max, lDiameter + rDiameter);
        return 1 + Math.max(lDiameter, rDiameter);
    }
}
module.exports = BinarySearchTree;

const binarySearchTree = new BinarySearchTree();
for (const iterator of [
    500, 250, 125, 1000, 2000, 3000, 4000, 6000, 7000, 8000, 750, 650, 600, 550
]) {
    binarySearchTree.add(iterator);
}
// console.log(binarySearchTree.diameter());
// for (const iterator of [50, 40, 30, 60, 59, 58, 57, 56, 55, 54, 70, 80]) {
//   binarySearchTree.add(iterator);
// }
// console.log(binarySearchTree.diameter());
// console.log(binarySearchTree.isSymmetric());
// binarySearchTree.add(100);
// binarySearchTree.add(50);
// binarySearchTree.add(150);
// binarySearchTree.add(50);
// binarySearchTree.add(150);
// binarySearchTree.add(40);
// binarySearchTree.add(60);
// binarySearchTree.add(140);
// binarySearchTree.add(160);
// binarySearchTree.add(30);
// binarySearchTree.add(45);
// binarySearchTree.add(55);
// binarySearchTree.add(65);
// binarySearchTree.add(130);
// binarySearchTree.add(145);
// binarySearchTree.add(155);
// binarySearchTree.add(165);
// binarySearchTree.add(35);
// binarySearchTree.add(25);
// binarySearchTree.add(27);
// console.log(binarySearchTree.findMinNode());
// binarySearchTree.preOrderTraversal();
// console.log(binarySearchTree.search(undefined, 300));
// console.log(binarySearchTree.findMinNode());
// binarySearchTree.inOrderTraversal();
// binarySearchTree.getTree();
// binarySearchTree.remove(40);
