const singlyLinkedList = require('../../js/singlyLinkedList');

var mergeNodes1 = function (head) {
  var mergeNodesWithZero = function (head) {
    if (!head) {
      return head;
    }
    if (head.val === 0) {
      head.next = mergeNodesWithZero(head.next);
    } else {
      while (head.next.val) {
        head.next.val = head.val + head.next.val;
        head = head.next;
      }
      head.next = mergeNodesWithZero(head.next);
    }
    return head;
  };

  const removeZero = function (head) {
    if (!head) {
      return head;
    }
    if (head.val === 0) {
      head = head.next;
    }
    if (!head) {
      return head;
    }
    head.next = removeZero(head.next);
    return head;
  };
  const getMergedNodesWithZero = mergeNodesWithZero(head);
  const res = removeZero(getMergedNodesWithZero);
  return res;
};

var mergeNodes = function (head) {
  if (!head) {
    return head;
  }
  while (head.val === 0) {
    head = head.next;
    if (!head) {
      return head;
    }
  }
  while (head.next.val) {
    head.next.val = head.val + head.next.val;
    head = head.next;
    if (!head) {
      return head;
    }
  }
  head.next = mergeNodes(head.next);
  return head;
};

let res;
res = mergeNodes(singlyLinkedList([0, 3, 1, 0, 4, 5, 2, 0]).head);
console.log(res);
res = mergeNodes(singlyLinkedList([0, 1, 0, 3, 0, 2, 2, 0]).head);
console.log(res);
