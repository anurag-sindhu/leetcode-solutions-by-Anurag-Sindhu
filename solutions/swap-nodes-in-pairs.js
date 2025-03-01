const singlyLinkedList = require('../javascript/singlyLinkedList');
var swapPairs = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    let currentNode = head;
    let nextNode = head.next;
    currentNode.next = nextNode.next;
    nextNode.next = currentNode;
    if (head.next) {
        const res = swapPairs(head.next);
        nextNode.next.next = res;
    }
    return nextNode;
};
let res;
res = swapPairs(singlyLinkedList([1, 2, 3, 4, 5]).head);
console.log(res);
res = swapPairs(singlyLinkedList([1, 2, 3, 4, 5, 6]).head);
console.log(res);
res = swapPairs(singlyLinkedList([1, 2, 3, 4]).head);
console.log(res);
res = swapPairs(singlyLinkedList([1, 2]).head);
console.log(res);
