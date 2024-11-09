const singlyLinkedList = require('../../js/singlyLinkedList');

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
  return node;
};

console.log(deleteNode(singlyLinkedList([1, 2, 2, 1]).head));
console.log(deleteNode(singlyLinkedList([1, 2]).head, (left = 1), (right = 1)));
