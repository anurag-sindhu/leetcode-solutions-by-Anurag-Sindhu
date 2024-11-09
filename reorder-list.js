const singlyLinkedList = require('../../js/singlyLinkedList');
function getLastNode(head) {
  if (!head.next) {
    return null;
  }
  if (!head.next.next) {
    const storeNode = head.next;
    head.next = null;
    return storeNode;
  }
  return getLastNode(head.next);
}

var reorderList = function (head) {
  if (!head) {
    return null;
  }
  const lastNode = getLastNode(head);
  if (lastNode) {
    const secondPointer = head.next;
    lastNode.next = secondPointer;
    head.next = lastNode;
  }
  reorderList(head.next && head.next.next);
  return head;
};
let res = null;

res = reorderList(singlyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).head);
console.log(res);

res = reorderList(singlyLinkedList([1, 2, 3, 4]).head);
console.log(res);

res = reorderList(singlyLinkedList([1, 2, 3, 4, 5]).head);
console.log(res);
