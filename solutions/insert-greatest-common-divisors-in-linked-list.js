const singlyLinkedList = require('../javascript/singlyLinkedList');

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}

var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};
var insertGreatestCommonDivisors = function (head) {
    if (!head) {
        return head;
    }
    const nextNode = head.next;
    if (!nextNode) {
        return head;
    }
    const gcdOfNums = gcd(head.val, nextNode.val);
    const newNode = new Node(gcdOfNums);
    newNode.next = nextNode;
    head.next = newNode;
    insertGreatestCommonDivisors(head.next.next);
    return head;
};
let resp;
resp = insertGreatestCommonDivisors(singlyLinkedList([7]).head);
console.log(resp);

resp = insertGreatestCommonDivisors(singlyLinkedList([18, 6, 10, 3]).head);
console.log(resp);
