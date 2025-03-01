const singlyLinkedList = require('../javascript/singlyLinkedList');

var removeElements = function (head, val) {
    if (!head) {
        return null;
    }
    while (head && head.val === val) {
        head = head.next;
    }
    if (head) {
        head.next = removeElements(head.next, val);
    }
    return head;
};
let res = removeElements(singlyLinkedList([7, 7, 7, 7]).head, 7);
console.log(res);
res = removeElements(singlyLinkedList([1, 2, 6, 3, 4, 5, 6]).head, 6);
console.log(res);
res = removeElements(singlyLinkedList([]).head, 1);
console.log(res);
