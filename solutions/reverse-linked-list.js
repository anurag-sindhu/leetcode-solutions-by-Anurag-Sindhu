const singlyLinkedList = require('../javascript/singlyLinkedList');

function reverseList(head) {
    let store,
        output = null;
    while (head) {
        store = head.next;
        head.next = output;
        output = head;
        head = store;
    }
    return output;
}

console.log(reverseList(singlyLinkedList([1, 2, 3, 4, 5]).head, (left = 2), (right = 4)));
console.log(reverseList(singlyLinkedList([5]).head, (left = 1), (right = 1)));
