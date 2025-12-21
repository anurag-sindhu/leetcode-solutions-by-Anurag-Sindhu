const singlyLinkedList = require('../javascript/singlyLinkedList');

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
    k = k % lengthOfLinkedList(head);
    while (k--) {
        function iterate(head) {
            if (head.next == null) {
                return null;
            }
            head.next = iterate(head.next);
            return head.next;
        }
        iterate(head);
        console.log('object');
    }
};
console.log(rotateRight(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(rotateRight(singlyLinkedList([0, 1, 2]).head, 4));
