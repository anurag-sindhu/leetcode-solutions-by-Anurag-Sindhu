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

var rotateRight = function (head, k) {
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
console.log(rotateRight(singlyLinkedList([1, 2, 3, 4, 5]).head, 2));
console.log(rotateRight(singlyLinkedList([0, 1, 2]).head, 4));
