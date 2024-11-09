const singlyLinkedList = require('../../js/singlyLinkedList');

class Node {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}

class addSinglyLinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (this.head) {
      let tempHead = this.head;
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    } else {
      this.head = newNode;
    }
    return this.head;
  }
}

var mergeKLists = function (lists) {
  const list = new addSinglyLinkedList();
  while (true) {
    const tempObj = {};
    let lowest = Infinity;
    for (let index = 0; index < lists.length; index++) {
      if (!lists[index]) {
        continue;
      }
      const currentValue = lists[index].val;
      tempObj[currentValue] = index;
      if (lowest > currentValue) {
        lowest = currentValue;
      }
    }
    if (lowest === Infinity) {
      return list.head;
    }
    const listIndex = tempObj[lowest];
    lists[listIndex] = lists[listIndex].next;
    list.add(lowest);
  }
};

let res = null;
res = mergeKLists(
  (lists = [
    singlyLinkedList([1, 4, 5]).head,
    singlyLinkedList([1, 3, 4]).head,
    singlyLinkedList([2, 6]).head
  ])
);
console.log(res);
