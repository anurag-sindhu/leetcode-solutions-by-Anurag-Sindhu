const singlyLinkedList = require('../javascript/singlyLinkedList');

var middleNode = function (head) {
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer;
};

console.log(middleNode(singlyLinkedList((head = [1, 2, 3, 4, 5])).head));
console.log(middleNode(singlyLinkedList((head = [1, 2, 3, 4, 5, 6])).head));
