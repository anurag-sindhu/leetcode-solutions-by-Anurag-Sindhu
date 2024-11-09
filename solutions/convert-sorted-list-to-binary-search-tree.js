const singlyLinkedList = require('../../js/singlyLinkedList');

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

var sortedListToBST = function (head) {
    const tree = new BinarySearchTree();
    if (!head) {
        return tree.tree;
    }
    if (head.next === null) {
        tree.add(head.val);
        return tree.tree;
    }
    let storeSlowPointer = null;
    const manipulate = function (fastPointer, slowPointer) {
        if (fastPointer !== null && fastPointer.next !== null) {
            manipulate(fastPointer.next.next, slowPointer.next);
        }
        if (storeSlowPointer === null) {
            storeSlowPointer = slowPointer;
            return;
        }
        tree.add(slowPointer.val);
        tree.add(storeSlowPointer.val);
        storeSlowPointer = storeSlowPointer.next;
        return;
    };

    manipulate(head, head);
    return tree.tree;
};

console.log(
    sortedListToBST(singlyLinkedList((head = [-10, -3, 0, 5, 9])).head)
);
console.log(sortedListToBST(singlyLinkedList((head = [])).head));
console.log(sortedListToBST(singlyLinkedList((head = [1])).head));
console.log(sortedListToBST(singlyLinkedList((head = [1, 2])).head));
console.log(
    sortedListToBST(singlyLinkedList((head = [1, 2, 3, 4, 5, 6])).head)
);
console.log(sortedListToBST(singlyLinkedList((head = [1, 2, 3])).head));
console.log(sortedListToBST(singlyLinkedList((head = [1, 2, 3, 4, 5])).head));
