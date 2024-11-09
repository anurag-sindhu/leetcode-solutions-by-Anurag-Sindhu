const singlyLinkedList = require('../../js/singlyLinkedList');

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

var getIntersectionNode = function (headA, headB) {
    const listALength = lengthOfLinkedList(headA);
    const listBLength = lengthOfLinkedList(headB);
    let difference = Math.abs(listALength - listBLength);
    if (difference) {
        if (listALength > listBLength) {
            while (difference--) {
                headA = headA.next;
            }
        } else {
            while (difference--) {
                headB = headB.next;
            }
        }
    }
    while (headA !== headB) {
        if (headA === null) {
        }
        headA = headA.next;
        headB = headB.next;
        if (headA === null || headB === null) {
            return null;
        }
    }
    return headA;
};

console.log(
    getIntersectionNode(
        singlyLinkedList([4, 1, 8, 4, 5]).head,
        singlyLinkedList([5, 6, 1, 8, 4, 5]).head
    )
);
