const singlyLinkedList = require('../javascript/singlyLinkedList');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const left = { value: 0, next: null };
    const right = { value: 0, next: null };
    let dummyLeft = left;
    let dummyRight = right;
    while (head) {
        const store = head.next;
        if (head.val < x) {
            dummyLeft.next = head;
            dummyLeft.next.next = null;
            dummyLeft = dummyLeft.next;
            console.log('object');
        } else {
            dummyRight.next = head;
            dummyRight.next.next = null;
            dummyRight = dummyRight.next;
            console.log('object');
        }
        head = store;
    }

    function merge(head) {
        if (!head) {
            return right.next;
        }
        const res = merge(head.next);
        head.next = res;
        console.log('object');
        return head;
    }
    merge(left);
    return left.next;
};

console.log(partition(singlyLinkedList([1, 4, 3, 2, 5, 2]).head, 3));
console.log(partition(singlyLinkedList([2, 1]).head, 2));
