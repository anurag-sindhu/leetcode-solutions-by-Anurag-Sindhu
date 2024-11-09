const listAdd = require('../../js/singlyLinkedList');
function try1() {
  class Node {
    constructor(data, next = null) {
      this.val = data;
      this.next = next;
    }
  }
  var deleteDuplicates = function (head, newList = null) {
    if (!head) {
      return newList;
    }
    if (newList === null) {
      newList = new Node(head.val);
    } else {
      let tempHead = newList;
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      if (head.val !== tempHead.val) {
        tempHead.next = new Node(head.val);
      }
    }
    return deleteDuplicates(head.next, newList);
  };
}

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  while (head.next && head.val === head.next.val) {
    if (!head.next.next) {
      head.next = null;
    } else {
      head.next = head.next.next;
    }
  }
  head.next = deleteDuplicates(head.next);
  return head;
};
let resp = deleteDuplicates(listAdd([0, 0, 0, 0, 0]).head);
resp = deleteDuplicates(listAdd([1, 1, 2, 3, 3]).head);
resp = deleteDuplicates(listAdd([1, 1, 1, 1, 2, 2, 3]).head);
resp = deleteDuplicates(listAdd([1, 1, 1, 1, 2]).head);
console.log(resp);
console.log(resp);
