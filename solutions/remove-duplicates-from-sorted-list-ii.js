const singlyLinkedList = require('../javascript/singlyLinkedList');
class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}
var deleteDuplicates1 = function (orgHead) {
    let wasDuplicated = false;
    let head = orgHead;
    let newList = null;
    while (head) {
        wasDuplicated = false;
        let currentHead = head;
        let nextHead = head.next;
        if (nextHead) {
            while (currentHead.val === nextHead.val) {
                nextHead = nextHead.next;
                wasDuplicated = true;
                if (!nextHead) {
                    break;
                }
            }
        }
        if (wasDuplicated) {
            head = nextHead;
            continue;
        }

        if (currentHead) {
            const newNode = new Node(currentHead.val);
            if (newList) {
                let tempHead = newList;
                while (tempHead.next !== null) {
                    tempHead = tempHead.next;
                }
                tempHead.next = newNode;
            } else {
                newList = newNode;
            }
            head = currentHead.next;
        }
    }
    return newList;
};

var deleteDuplicates = function (head) {
    let dummy = { val: null, next: head };
    let prev = dummy;
    if (!prev) {
        return head;
    }
    let now = dummy.next;
    if (!now) {
        return head;
    }
    let then = dummy.next.next;

    if (!then && prev.val == now.val) {
        return null;
    }

    while (now && prev && then) {
        if (now.val == then.val) {
            while (now.val == then.val) {
                now = then;
                then = then.next;
            }
            prev.next = then;
            now = then;
            then = then.next;
        } else {
            prev = now;
            now = then;
            then = then.next;
        }
    }
    head = dummy.next;
    console.log(head);
};

console.log(deleteDuplicates(singlyLinkedList([3, 3, 4, 4, 5]).head));
console.log(deleteDuplicates(singlyLinkedList([3, 3]).head));
console.log(deleteDuplicates(singlyLinkedList([1, 2, 3, 3, 4, 4, 5]).head));
console.log(deleteDuplicates(singlyLinkedList([1, 1, 1, 2, 3]).head));
console.log(deleteDuplicates(singlyLinkedList([3, 3, 3]).head));
console.log(deleteDuplicates(singlyLinkedList([2, 3, 3]).head));
console.log(deleteDuplicates(singlyLinkedList([1, 2, 3, 4, 5]).head));
console.log(deleteDuplicates(singlyLinkedList([1, 2, 2, 3, 4, 4, 5]).head));
console.log(deleteDuplicates(singlyLinkedList([2, 2, 3, 4, 4, 5]).head));
