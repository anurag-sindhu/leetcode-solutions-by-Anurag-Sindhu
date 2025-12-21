const singlyLinkedList = require('../javascript/singlyLinkedList');

var removeNthFromEnd = function (head, n) {
    let lastNode = 0;
    function helper(head) {
        if (!head) {
            return null;
        }
        head.next = helper(head.next);
        lastNode += 1;
        if (lastNode === n) {
            const afterNode = head.next;
            console.log({ afterNode });
            return afterNode;
        }
        return head;
    }
    if (head.next == null) {
        head = null;
        return head;
    }
    helper(head);
    return head;
};

console.log(removeNthFromEnd(singlyLinkedList([1, 2]).head, 2));
console.log(removeNthFromEnd(singlyLinkedList([1, 2]).head, 1));
console.log(removeNthFromEnd(singlyLinkedList([1]).head, 1));
console.log(removeNthFromEnd(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(removeNthFromEnd(singlyLinkedList([1, 2]).head, 1));
console.log(removeNthFromEnd((head = [1]), (n = 1)));
