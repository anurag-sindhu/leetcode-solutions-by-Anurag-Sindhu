const singlyLinkedList = require('../../js/singlyLinkedList');

var isPalindrome = function (head) {
  console.log(, "11")
  if (!head) {
    return 1;
  }
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const len = arr.length;
  const half = Math.floor(len / 2);
  for (let index = 0; index < half; index++) {
    if (arr[index] !== arr[len - index - 1]) {
      return 0;
    }
  }
  return 1;
};
console.log(isPalindrome(singlyLinkedList([2, 2, 2, 5, 6, 5]).head, (left = 2), (right = 4)));
console.log(isPalindrome(singlyLinkedList([1, 2, 2, 1]).head, (left = 2), (right = 4)));
console.log(isPalindrome(singlyLinkedList([1, 2]).head, (left = 1), (right = 1)));
