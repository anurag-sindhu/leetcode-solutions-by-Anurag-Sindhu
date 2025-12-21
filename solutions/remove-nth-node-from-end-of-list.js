const singlyLinkedList = require('../javascript/singlyLinkedList');

function totalListsCount(head) {
    if (!head) {
        return 0;
    }
    return 1 + totalListsCount(head.next);
}

function removeNodeList(head, index, currentIndex = 0) {
    if (index < currentIndex) {
        return head;
    }
    if (!head) {
        return 0;
    }
    if (index === currentIndex) {
        return head.next;
    } else {
        head.next = removeNodeList(head.next, index, currentIndex + 1);
    }
    return head;
}

var removeNthFromEnd = function (head, n) {
    const count = totalListsCount(head);
    return removeNodeList(head, count - n);
};

console.log(removeNthFromEnd(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(removeNthFromEnd(singlyLinkedList([1]).head, 1));
console.log(removeNthFromEnd(singlyLinkedList([1, 2]).head, 1));
console.log(removeNthFromEnd((head = [1]), (n = 1)));
console.log(removeNthFromEnd((head = [1, 2]), (n = 1)));
