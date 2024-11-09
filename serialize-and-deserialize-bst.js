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
            console.log('object');
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
}
var serialize = function (root) {
    let str = '';
    function helper(root) {
        if (!root) {
            return;
        }
        str += root.val + '_';
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return str.substring(0, str.length - 1);
};

function removeNullNodeFromTree(root) {
    if (!root) {
        return;
    }
    if (root.left && root.left.val === null) {
        root.left = null;
    }
    removeNullNodeFromTree(root.left);
    if (root.right && root.right.val === null) {
        root.right = null;
    }
    removeNullNodeFromTree(root.right);
}

var deserialize = function (data) {
    let binaryTree;

    binaryTree = new BinaryTree();
    if (data.length) {
        for (const iterator of data.split('_')) {
            if (iterator === 'null') {
                binaryTree.add(null);
            } else {
                binaryTree.add(Number(iterator));
            }
        }
    }
    removeNullNodeFromTree(binaryTree.tree);
    return binaryTree.tree;
};

let first;
let binaryTree;

binaryTree = new BinaryTree();
for (const iterator of (root = [1, null, 2])) {
    binaryTree.add(iterator);
}
first = deserialize(serialize(binaryTree.tree));
console.log(first); //[1,null,2]

binaryTree = new BinaryTree();
for (const iterator of (root = [])) {
    binaryTree.add(iterator);
}
first = deserialize(serialize(binaryTree.tree));
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of (root = [2, 1, 3])) {
    binaryTree.add(iterator);
}
first = deserialize(serialize(binaryTree.tree));
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 8);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [1, 2, 3]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 5);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 22);
console.log(first);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [-2, null, -3]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, -2);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 1);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 1);
console.log(first === true);

binaryTree = new BinaryTree();
for (const iterator of []) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 0);
console.log(first === false);

binaryTree = new BinaryTree();
for (const iterator of [1, 2]) {
    binaryTree.add(iterator);
}
first = serialize(binaryTree.tree, 1);
console.log(first === false);
