const singlyLinkedList = require('../javascript/singlyLinkedList');

function reverseBetween(head, m, n) {
    if (!head) return null;

    let dummy = { val: 0, next: head };
    let pre = dummy;

    // Move `pre` to the node before the reversing position
    for (let i = 0; i < m - 1; i++) {
        pre = pre.next;
    }

    let start = pre.next; // start of sublist to reverse
    let then = start.next; // node to move

    // Reverse the sublist from m to n
    for (let i = 0; i < n - m; i++) {
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
        console.log('object');
    }

    return dummy.next;
}

console.log(reverseBetween(singlyLinkedList([1, 2, 3, 4, 5, 6, 7]).head, (left = 2), (right = 4)));
console.log(reverseBetween(singlyLinkedList([1, 2, 3, 4, 5, 6, 7]).head, (left = 3), (right = 5)));
console.log(reverseBetween(singlyLinkedList([1, 2, 3, 4, 5]).head, (left = 2), (right = 4)));
console.log(reverseBetween(singlyLinkedList([5]).head, (left = 1), (right = 1)));
