const singlyLinkedList = require('../../js/singlyLinkedList');
const getAllNumbers = function (list, str = ``) {
  if (!list) {
    return ``;
  }
  str = getAllNumbers(list.next, str);
  return str + list.val;
};
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = function (num, list) {
  const newNode = new Node(num);
  if (!list) {
    list = newNode;
  } else {
    list.next = createLinkedList(num, list.next);
  }
  return list;
};

var addTwoNumbers = function (l1, l2) {
  const l1Numbers = getAllNumbers(l1);
  const l2Numbers = getAllNumbers(l2);
  let sum = ``;
  let rem = 0;
  let l1Index = l1Numbers.length - 1;
  let l2Index = l2Numbers.length - 1;
  while (l1Index >= 0 || l2Index >= 0) {
    let tempSum = rem;
    if (l1Numbers[l1Index]) {
      tempSum += Number(l1Numbers[l1Index]);
    }
    if (l2Numbers[l2Index]) {
      tempSum += Number(l2Numbers[l2Index]);
    }
    rem = parseInt(tempSum / 10);
    sum += tempSum % 10;
    l1Index--;
    l2Index--;
  }
  if (rem) {
    sum += rem;
  }
  let output = null;
  for (let index = 0; index < sum.length; index++) {
    output = createLinkedList(Number(sum[index]), output);
  }
  return output;
};

console.log(addTwoNumbers(singlyLinkedList([2, 4, 3]).head, singlyLinkedList([5, 6, 4]).head));
console.log(
  addTwoNumbers(
    singlyLinkedList([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
    ]).head,
    singlyLinkedList([5, 6, 4]).head
  )
);
console.log(
  addTwoNumbers(singlyLinkedList([9, 9, 9, 9, 9, 9, 9]).head, singlyLinkedList([9, 9, 9, 9]).head)
);
console.log(addTwoNumbers(singlyLinkedList([0]).head, singlyLinkedList([0]).head));
