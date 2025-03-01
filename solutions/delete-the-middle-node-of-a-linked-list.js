const singlyLinkedList = require('../javascript/singlyLinkedList');

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}

var deleteMiddle = function (head) {
    if (head.next === null) {
        return new SinglyLinkedList().head;
    }

    if (head.next.next === null) {
        head.next = null;
        return head;
    }
    let slowPointStore = null;
    function manipulate(slowPointer, fastPointer, firstHalf = {}) {
        if (fastPointer !== null && fastPointer.next !== null) {
            firstHalf.next = new Node(slowPointer.val);
            manipulate(slowPointer.next, fastPointer.next.next, firstHalf.next);
        }
        if (slowPointStore === null) {
            slowPointStore = slowPointer.next;
            firstHalf.next = slowPointStore;
        }
        return firstHalf;
    }

    return manipulate(head, head, head).next;
};

console.log(deleteMiddle(singlyLinkedList((head = [1, 2, 3, 4, 5, 6])).head));
console.log(deleteMiddle(singlyLinkedList((head = [1])).head));
console.log(deleteMiddle(singlyLinkedList((head = [1, 2])).head));
console.log(deleteMiddle(singlyLinkedList((head = [1, 2, 3])).head));
console.log(deleteMiddle(singlyLinkedList((head = [1, 2, 3, 4, 5])).head));
