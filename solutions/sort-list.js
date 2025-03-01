const singlyLinkedList = require('../javascript/singlyLinkedList');
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const [left, right] = split(head);
    const root = new Node(null);
    return merge(root, sortList(left), sortList(right));
};

function split(node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const left = node;
    const right = slow.next;
    slow.next = null;

    return [left, right];
}

function merge(root = null, left, right) {
    let pointer = root;
    while (left !== null || right !== null) {
        if (!left) {
            pointer.next = right;
            right = right.next;
        } else if (!right) {
            pointer.next = left;
            left = left.next;
        } else if (left.val > right.val) {
            pointer.next = right;
            right = right.next;
        } else {
            pointer.next = left;
            left = left.next;
        }
        if (pointer.next.next) {
            pointer.next.next = null;
        }
        pointer = pointer.next;
    }
    return root.next;
}
let res;

res = sortList(singlyLinkedList([4, 2, 1, 3, 5, 6, 7, 8, 9]).head);
console.log(res);
