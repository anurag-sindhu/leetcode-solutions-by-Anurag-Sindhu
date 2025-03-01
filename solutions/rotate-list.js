const singlyLinkedList = require('../javascript/singlyLinkedList');
class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}
function lengthOfLinkedList(head) {
    if (!head) {
        return 0;
    }
    let len = 1;
    while (head.next) {
        head = head.next;
        len++;
    }
    return len;
}
function removeLastNode(head) {
    if (!head) {
        return 0;
    }
    while (head.next) {
        head = head.next;
        if (!head.next.next) {
            head.next = null;
        }
    }
    return head;
}

var rotateRight = function (head, k) {
    const getLengthOfLinkedList = lengthOfLinkedList(head);
    k = k % getLengthOfLinkedList;
    while (k--) {
        let tempHead = head;
        while (tempHead.next) {
            tempHead = tempHead.next;
        }
        const newNode = new Node(tempHead.val);
        newNode.next = head;
        head = newNode;
        removeLastNode(head);
    }
    return head;
};
console.log(rotateRight(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(rotateRight(singlyLinkedList([0, 1, 2]).head, 4));
