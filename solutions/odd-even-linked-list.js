const singlyLinkedList = require('../javascript/singlyLinkedList');

var oddEvenList1 = function (head, odd = null, even = null, isOdd = true) {
    if (!head) {
        return null;
    }
    while (head) {
        if (isOdd) {
            if (!odd) {
                odd = { val: head.val, next: null };
            } else {
                let tempHead = odd;
                while (tempHead.next !== null) {
                    tempHead = tempHead.next;
                }
                tempHead.next = { val: head.val, next: null };
            }
            isOdd = false;
        } else {
            if (!even) {
                even = { val: head.val, next: null };
            } else {
                let tempHead = even;
                while (tempHead.next !== null) {
                    tempHead = tempHead.next;
                }
                tempHead.next = { val: head.val, next: null };
            }
            isOdd = true;
        }
        head = head.next;
    }
    let tempHead = odd;
    while (tempHead.next !== null) {
        tempHead = tempHead.next;
    }
    tempHead.next = even;
    return odd;
};

var oddEvenList = function (head, odd = null, even = null, isOdd = true) {
    if (!head) {
        return null;
    }
    odd = head;
    even = head.next;
    while (head) {
        if (isOdd) {
            odd.next = even.next;
            odd = odd.next;
        } else {
            even.next = odd.next;
            even = even.next;
        }
        isOdd = !isOdd;
        head = head.next;
    }
    return;
};
console.log(oddEvenList(singlyLinkedList([1, 2, 3, 4, 5]).head));
console.log(oddEvenList(singlyLinkedList([2, 1, 3, 5, 6, 4, 7]).head));
