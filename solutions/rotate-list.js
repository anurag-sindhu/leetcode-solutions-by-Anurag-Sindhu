const singlyLinkedList = require('../javascript/singlyLinkedList');

var rotateRight1 = function (head, k) {
    const totalLen = lengthOfLinkedList(head);
    k = k % totalLen;
    if (totalLen == 0) {
        return head;
    }
    if (k == 0) {
        return head;
    }
    const dummy = { val: null, next: head };
    let needToSplitAtReference = null;
    function iterate(head, count) {
        if (!head.next) {
            const store = needToSplitAtReference.next;
            needToSplitAtReference.next = null;
            head.next = dummy.next;
            dummy.next = store;
            return;
        }
        if (count == totalLen - k + 1) {
            needToSplitAtReference = head;
        }
        iterate(head.next, count + 1);
    }
    iterate(dummy, 1);
    return dummy.next;
};

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
class Node {
    constructor() {
        this.val = 0;
        this.next = null;
    }
}
var rotateRight = function (head, k) {
    // FIX 1: Handle empty list or 1-item list to prevent division by zero
    if (!head || !head.next || k == 0) {
        return head;
    }
    const totalLen = lengthOfLinkedList(head);
    k = k % totalLen;
    // FIX 2: If k becomes 0 after modulo, no rotation is needed
    if (k === 0) return head;
    const dummyNode = new Node();
    function rotateRightHelper(head, k, length = 0) {
        if (!head) {
            return;
        }
        if (totalLen - length === k) {
            const headNext = head.next;
            dummyNode.next = headNext;
            head.next = null;
            return;
        }
        rotateRightHelper(head.next, k, length + 1);
    }
    rotateRightHelper(head, k, 1);
    function fitDummy(dummyNode) {
        if (!dummyNode.next) {
            dummyNode.next = head;
            return;
        }
        fitDummy(dummyNode.next);
    }
    fitDummy(dummyNode);
    return dummyNode.next;
};
console.log(rotateRight(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(rotateRight(singlyLinkedList([1, 2]).head, 1));
console.log(rotateRight(singlyLinkedList([0, 1, 2]).head, 4));
console.log(rotateRight(singlyLinkedList([1, 2]).head, 0));
