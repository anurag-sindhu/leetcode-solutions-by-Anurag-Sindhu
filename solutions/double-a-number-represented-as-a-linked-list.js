const singlyLinkedList = require('../javascript/singlyLinkedList');

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}

var doubleIt = function (head) {
    let reminder = 0;
    var doubleItHelper = function (head) {
        if (!head) {
            return;
        }
        doubleItHelper(head.next);
        if (2 * head.val + reminder > 9) {
            head.val = (2 * head.val + reminder) % 10;
            reminder = 1;
        } else {
            head.val = head.val * 2 + reminder;
            reminder = 0;
        }
    };

    doubleItHelper(head);
    if (reminder) {
        const newNode = new Node(reminder);
        newNode.next = head;
        return newNode;
    }
    return head;
};

let res;
res = doubleIt(singlyLinkedList([9, 9, 9]).head);
console.log(res); //1,0
res = doubleIt(singlyLinkedList([1, 8, 9]).head);
console.log(res); //1,0
