const singlyLinkedList = require('../../js/singlyLinkedList');

class Node {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.totalElements = 0;
    this.reverseList = null;
    this.isReversingDone = null;
  }
  reverseLinkedListSpecifically(data, left, right) {
    while (data) {
      this.totalElements++;
      const newNode = new Node(data.val);
      data = data.next;
      if (this.totalElements >= left && this.totalElements <= right) {
        if (this.reverseList) {
          newNode.next = this.reverseList;
        }
        this.reverseList = newNode;
        this.isReversingDone = true;
      } else {
        if (this.isReversingDone) {
          if (this.head) {
            let tempHead = this.head;
            while (tempHead.next !== null) {
              tempHead = tempHead.next;
            }
            tempHead.next = this.reverseList;
          } else {
            this.head = this.reverseList;
          }
          this.isReversingDone = false;
        }
        if (this.head) {
          let tempHead = this.head;
          while (tempHead.next !== null) {
            tempHead = tempHead.next;
          }
          tempHead.next = newNode;
        } else {
          this.head = newNode;
        }
      }
    }
    if (this.isReversingDone) {
      if (this.head) {
        let tempHead = this.head;
        while (tempHead.next !== null) {
          tempHead = tempHead.next;
        }
        tempHead.next = this.reverseList;
      } else {
        this.head = this.reverseList;
      }
      this.isReversingDone = false;
    }
    return this.head;
  }
}

var reverseBetween = function (head, left, right) {
  return new SinglyLinkedList().reverseLinkedListSpecifically(head, left, right);
};
console.log(reverseBetween(singlyLinkedList([1, 2, 3, 4, 5]).head, (left = 2), (right = 4)));
console.log(reverseBetween(singlyLinkedList([5]).head, (left = 1), (right = 1)));
